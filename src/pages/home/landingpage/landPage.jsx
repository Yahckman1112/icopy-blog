import React from "react";
import "./landPage.css";
import { Link } from "react-router-dom";

function LandPage(props) {
  return (
    <div className='col-12 col-sx-12 col-sm-12'>
      <div className="row homeLandPage">
        <div className="col-12 col-sm-6  home__info">
          <p>
            Stories are Magnets that Automatically Attract{" "}
            <span className="head__info--main">prospects</span> to your{" "}
            <span className="head__info--main">Business</span>
            and put them in your hands.
          </p>
          <p>
            <span className="head__info--sub">shall we tell them?</span>
            <span className="head__info--sub">
              Im porpularly known as story maker
            </span>
          </p>
          <Link to="/services"col-12 className="home__info--Button">
            Yes Please <i className="fa fa-sharp fa-solid fa-arrow-right"></i>
          </Link>{" "}
        </div>

        <div className="col-sm-6 home__head--pix"> </div>
      </div>
    </div>
  );
}

export default LandPage;
