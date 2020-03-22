const graphql = require("graphql");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull
} = graphql;

const Movies = require("../models/movie");
const Directors = require("../models/director");

const MovieType = new GraphQLObjectType({
  name: "Movie",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    year: { type: GraphQLInt },
    poster: { type: GraphQLString },
    director: {
      type: DirectorsType,
      resolve(parent) {
        return Directors.findById(parent.directorId);
      }
    }
  })
});

const DirectorsType = new GraphQLObjectType({
  name: "Director",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    movies: {
      type: new GraphQLList(MovieType),
      resolve(parent) {
        return Movies.find({ directorId: parent.id });
      }
    }
  })
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addDirector: {
      type: DirectorsType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parent, args) {
        const director = new Directors({
          name: args.name
        });

        return director.save();
      }
    },
    addMovie: {
      type: MovieType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        year: { type: new GraphQLNonNull(GraphQLInt) },
        poster: { type: GraphQLString },
        directorId: { type: GraphQLID }
      },
      resolve(parent, args) {
        const movie = new Movies({
          name: args.name,
          year: args.year,
          poster: args.poster,
          directorId: args.directorId
        });

        return movie.save();
      }
    },
    updateDirector: {
      type: DirectorsType,
      args: {
        id: { type: GraphQLID },
        name: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parent, args) {
        return Directors.findByIdAndUpdate(
          args.id,
          { $set: { name: args.name } },
          { new: true }
        );
      }
    },
    updateMovie: {
      type: MovieType,
      args: {
        id: { type: GraphQLID },
        year: { type: new GraphQLNonNull(GraphQLInt) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        poster: { type: GraphQLString },
        directorId: { type: GraphQLID }
      },
      resolve(parent, args) {
        return Movies.findByIdAndUpdate(
          args.id,
          {
            $set: {
              name: args.name,
              year: args.year,
              poster: args.poster,
              directorId: args.directorId
            }
          },
          { new: true }
        );
      }
    },
    deleteDirector: {
      type: DirectorsType,
      args: {
        id: { type: GraphQLID }
      },
      resolve(parent, args) {
        return Directors.findByIdAndRemove(args.id);
      }
    },
    deleteMovie: {
      type: MovieType,
      args: {
        id: { type: GraphQLID }
      },
      resolve(parent, args) {
        return Movies.findByIdAndRemove(args.id);
      }
    }
  }
});

const Query = new GraphQLObjectType({
  name: "Query",
  fields: {
    movie: {
      type: MovieType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Movies.findById(args.id);
      }
    },
    director: {
      type: DirectorsType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Directors.findById(args.id);
      }
    },
    movies: {
      type: new GraphQLList(MovieType),
      resolve() {
        return Movies.find({});
      }
    },
    directors: {
      type: new GraphQLList(DirectorsType),
      resolve() {
        return Directors.find({});
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: Query,
  mutation: Mutation
});
