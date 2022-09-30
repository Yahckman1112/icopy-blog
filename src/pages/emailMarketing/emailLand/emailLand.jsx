import React from "react";
import "./emailLand.css";
import BannerSideOne from "./../../../components/banner/sideOne";
function EmailLand(props) {
  return (
    <div className="col-12 col-sm-12 email_LandPage">
      <div className="row">
        <div className="col col-12 col-sm-6">
          <BannerSideOne
            text="ICopyStory Marketing Services"
            firstSpan="Hey there"
            secondSpan="Meet The EmailMarketer"
            linkName="Get Started"
            link="#"
          />
        </div>
        <div className="col col-12 col-sm-6 email_side"></div>
      </div>
    </div>
  );
}

export default EmailLand;
