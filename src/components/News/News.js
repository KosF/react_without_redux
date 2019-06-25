import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import getNews from "Src/store/News/newsActions";
import NewsItem from "./NewsItem/NewsItem";

function News({ newsList, loading, error, ...props }) {
  useEffect(() => {
    props.getNews();
    // TODO: temporary solution
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
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
  newsList: PropTypes.arrayOf(PropTypes.object)
};

News.defaultProps = {
  error: null,
  newsList: []
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(News);
