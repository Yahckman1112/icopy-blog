import React from "react";
import './aboutBody.css'
function AboutText({ text }) {
  return (
    <div className='col-12 col-sx-12 col-sm-12  text'>

      <p>{text}</p>
    </div>
  );
}

export default AboutText;
