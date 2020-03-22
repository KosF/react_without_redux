import React from "react";
import PropTypes from "prop-types";

function NewsItem({ data }) {
  return (
    <article className="row mb-3">
      <h5>{data.title}</h5>

      <p>{data.body}</p>
    </article>
  );
}

NewsItem.propTypes = {
  data: PropTypes.shape({}).isRequired
};

export default NewsItem;
