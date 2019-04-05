import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getNews } from "Src/store/News/newsActions";
import NewsItem from "./NewsItem/NewsItem";

function News({ ...props }) {
  useEffect(() => {
    if (!props.newsList.length) {
      props.getNews();
    }
  });

  const { loading, error, newsList } = props;

  if (loading) {
    return "Loading...";
  }

  if (error) {
    return error.message;
  }

  return (
    <div className="container">
      {newsList.map(newsItem => (
        <NewsItem key={newsItem.id} data={newsItem} />
      ))}
    </div>
  );
}

const mapStateToProps = store => ({
  newsList: store.newsReducer.newsList,
  loading: store.newsReducer.loading,
  error: store.newsReducer.error
});

const mapDispatchToProps = { getNews };

News.propTypes = {
  getNews: PropTypes.func.isRequired,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  loading: PropTypes.bool.isRequired,
  newsList: PropTypes.arrayOf(PropTypes.object).isRequired
};

News.defaultProps = {
  error: null
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(News);
