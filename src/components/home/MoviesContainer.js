import React from "react";

import { connect } from "react-redux";

import MovieCard from "./MovieCard";

const MoviesContainer = ({ movies }) => {
  let content = "";
  content =
    movies && movies.length > 0
      ? movies.map((movie, index) => <MovieCard key={index} movie={movie} />)
      : null;
  return <div className="row">{content}</div>;
};

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
});

export default connect(mapStateToProps)(MoviesContainer);
