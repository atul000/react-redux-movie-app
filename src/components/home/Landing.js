import React from "react";

import SearchForm from "./SearchForm";
import MoviesContainer from "./MoviesContainer";
import Spinner from "../layout/Spinner";

import { connect } from "react-redux";

const Landing = ({ loading }) => {
  return (
    <div className="container">
      <SearchForm />
      {loading ? <Spinner /> : <MoviesContainer />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.movies.loading,
});

export default connect(mapStateToProps)(Landing);
