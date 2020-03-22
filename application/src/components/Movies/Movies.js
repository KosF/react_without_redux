import React from "react";
import { useQuery } from "@apollo/react-hooks";

import Movie from "./Movie/Movie";
import GET_MOVIES from "./queries";

const Movies = () => {
  const { data, error, loading } = useQuery(GET_MOVIES);

  if (loading) {
    return <p>...Loading</p>;
  }

  if (error) {
    return <p>ERROR</p>;
  }

  if (!data) {
    return <p>Not found</p>;
  }

  return (
    <div className="container">
      {data.movies.map(movie => (
        <Movie key={movie.id} data={movie} />
      ))}
    </div>
  );
};

export default Movies;
