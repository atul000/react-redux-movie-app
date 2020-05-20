import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="col-md-3 mb-5">
      <div className="card card-body bg-dark text-center h-100">
        {movie.Poster === "N/A" ? (
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT_16qEhZIoqj0jNZJJ3wRt7jvKPWwpCjgOKKabMbiMH0W-I6gm&usqp=CAU"
            className="w-100 mb-2"
            alt="Movie Cover"
          />
        ) : (
          <img src={movie.Poster} className="w-100 mb-2" alt="Movie Cover" />
        )}
        <h5 className="text-light card-title">
          {movie.Title} - {movie.Year}
        </h5>
        <Link className="btn btn-primary" to={"/movie/" + movie.imdbID}>
          Movie Details
          <i className="fas fa-chevron-right" />
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
