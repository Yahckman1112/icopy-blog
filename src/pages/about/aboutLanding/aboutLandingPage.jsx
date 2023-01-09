import React from "react";
import "./aboutLand.css";
function AboutLandingPage(props) {
  return (
    <div className="about ">
      <div className="row about-up container">
        <div className="col-12  col-lg-6 col-md-6 about_up_main  ">
          <p className="about_up_para1 ">
            Meet <span className="about_up_para1_span"> th</span>e story
            Marketer
          </p>

          <p className="b">
            <span>Hey there</span>  <br />
            <span>Meet The StoryMarketer</span>
          </p>
        </div>

        <div className="col-12 col-lg-6 col-md-6 about__head--pix"></div>
      </div>
    </div>
  );
}

export default AboutLandingPage;
