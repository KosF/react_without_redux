import React from "react";
import PropTypes from "prop-types";

const Movie = ({ data }) => (
  <article className="row mb-3 border-bottom">
    {data.poster && (
      <div className="col-auto mb-3 pr-0 pl-0">
        <img src={data.poster} alt={data.name} />
      </div>
    )}
    <div className="col">
      <h5>{data.name}</h5>

      <p className="mb-0">
        Director: <strong>{data.director.name}</strong>
      </p>
      <p>
        Year: <strong>{data.year}</strong>
      </p>
    </div>
  </article>
);

Movie.propTypes = {
  data: PropTypes.shape({}).isRequired
};

export default Movie;
