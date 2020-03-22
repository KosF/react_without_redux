import { gql } from "apollo-boost";

const GET_MOVIES = gql`
  query moviesQuery {
    movies {
      id
      name
      year
      poster
      director {
        id
        name
      }
    }
  }
`;

export default GET_MOVIES;
