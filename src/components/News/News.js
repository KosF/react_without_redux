import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getNews } from "Src/store/News/newsActions";
import NewsItem from "./NewsItem/NewsItem";

class News extends Component {
  componentDidMount() {
    if (!this.props.newsList.length) {
      this.props.getNews();
    }
  }

  render() {
    const { loading, error, newsList } = this.props;

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
}
// function News({ ...props }) {
//   useEffect(() => {
//
//   });
//
//   // const bbb = props.getNews();
//
//   return (
//     <div className="container">
//       <NewsItem />
//     </div>
//   );
// }

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
