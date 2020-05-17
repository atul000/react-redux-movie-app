import React from "react";

const Footer = () => {
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="footer p-3 mt-4 text-center bg-dark text-light">
          Developed By:
          <span className="text-warning font-weight-normal">Atul Beniwal</span>
          , Using <i className="fab fa-react" /> React JS &amp; Redux JS
          integrated with external movies data API
          <a
            href="http://www.omdbapi.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            OMDB
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
