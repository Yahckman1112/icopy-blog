import React from "react";
import BannerSideOne from "../../../components/banner/sideOne";
import "./serviceLanding.css";
function ServiceLandingPage(props) {
  return (
    <div className="col-12 col-sx-12 col-sm-12 service_landing">
      <div className="row service_row">
        <div className="col-12 col-sm-6">
          <BannerSideOne
            text="ICopyStory Marketing Services"
            firstSpan="Hey there
            "
            secondSpan="Explore my services"
            linkName='Get Started'
          />
        </div>
        <div className="col-12 col-sm-6 service_land_bg">
        
        </div>
      </div>
    </div>
  );
}

export default ServiceLandingPage;
