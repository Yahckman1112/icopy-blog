import React from "react";
import "./banner.css";
import { Link } from "react-router-dom";
function BannerSideOne({ text, firstSpan, secondSpan, link = "#", linkName }) {
  return (
    <div className=" banner_first_side col-12 c0l-sx-12 c0l-sm-6">
      <p className="banner_main_text">{text}</p>

      <p className="banner_sub">
        <span> {firstSpan}</span> <br />
        <span> {secondSpan}</span> <br />
        <div className="banner_btn_p">
        <Link className="banner_btn" to={link}>  
          {linkName} <i className="fa fa-sharp fa-solid fa-arrow-right"></i>
        </Link>
        </div>
      </p>
    </div>
  );
}

export default BannerSideOne;
