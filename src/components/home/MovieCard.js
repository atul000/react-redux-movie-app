import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="col-md-3 mb-5">
      <div className="card card-body bg-dark text-center h-100">
        <img src={movie.Poster} className="w-100 mb-2" alt="Movie Cover" />
        <h5 className="text-light card-title">
          {movie.Title} - {movie.Year}
        </h5>
        <a className="btn btn-primary" href="/#">
          Movie Details
          <i className="fas fa-chevron-right" />
        </a>
      </div>
    </div>
  );
};

export default MovieCard;
