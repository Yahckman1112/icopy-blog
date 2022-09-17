import React from "react";
import HomeBody from "./homebody/homeBody";
import LandPage from "./landingpage/landPage";
import HomeCard from "./homeCard/homeCard";
function Home(props) {
  return (
    <div className="col-12 col-sm-12 col-md-lg-6 col-xs-12">
      <LandPage />
      <HomeBody />
      <HomeCard />
    </div>
  );
}

export default Home;
