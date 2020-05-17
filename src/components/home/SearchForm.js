import React from "react";

import { connect } from "react-redux";
import { searchMovie, fetchMovies } from "../../actions/searchActions";

const SearchForm = (props) => {
  const onChange = (e) => {
    props.searchMovie(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    props.fetchMovies(props.text);
    console.log(props.movies.Search);
  };

  return (
    <div className="jumbotron jumbotron-fluid mt-5 text-center">
      <div className="container">
        <h1 className="display-4 mb-3">
          <i className="fa fa-search" /> Search for a movie, TV series...
        </h1>
        <form id="searchForm" onSubmit={onSubmit}>
          <input
            type="text"
            className="form-control"
            name="searchText"
            onChange={onChange}
          />
          <button type="submit" className="btn btn-primary btn-bg mt-3">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  text: state.movies.text,
  movies: state.movies.movies,
});

export default connect(mapStateToProps, { searchMovie, fetchMovies })(
  SearchForm
);
