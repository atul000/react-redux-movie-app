import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="navbar navbar-light bg-dark mb-5">
        <div className="container">
          <div className="navbar-header">
            <a href="/#" className="navbar-brand text-white text-lg brand-text">
              MovieSeriesInfo
            </a>
          </div>
          <ul className="navbar-nav ml-auto text-light d-inline-block">
            <li className="nav-item d-inline-block mr-4">
              <i className="fab fa-imdb fa-5x" id="imdb-logo" />
            </li>
            <li className="nav-item d-inline-block mr-4">
              <i className="fab fa-react fa-5x" id="react-logo" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;