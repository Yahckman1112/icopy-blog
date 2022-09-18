import React from "react";
import { Link } from "react-router-dom";
import "./notFound.css";
function NotFound(props) {
  return (
    <div className="footer-body">
      <p className="not-main"> Oops! </p>
      <p className="footer-para2">404-page not found</p>
      <p className="footer-para3">
        The page you are looking for might be removed or temporarily unavailabe
      </p>
      <Link to="/" className="footer-btn"> Goto HomePage </Link>
    </div>
  );
}

export default NotFound;
