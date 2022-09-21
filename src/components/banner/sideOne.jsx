import React from "react";
import "./banner.css";
function BannerSideOne({ text, firstSpan, secondSpan }) {
  return (
    <div className=" banner_first_side col-12 c0l-sx-12 c0l-sm-6">
      <p className="banner_main_text">{text}</p>

      <p className="banner_sub">
        <span> {firstSpan}</span> <br />
        <span> {secondSpan}</span>
      </p>
    </div>
  );
}

export default BannerSideOne;
