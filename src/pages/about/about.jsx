import React from "react";
import AboutLandingPage from "./aboutLanding/aboutLandingPage";
import AboutBody from "./aboutBody/aboutBody";
import Footer from "./../../components/footer/footer";

function About(props) {
  return (
    <div>
      <AboutLandingPage />
      <AboutBody />
      <Footer />
    </div>
  );
}

export default About;
