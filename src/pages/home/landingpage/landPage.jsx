import React from "react";
import "./landPage.css";
import { Link } from "react-router-dom";

import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
function LandPage(props) {
  return (
    <div>
      <div className="row homeLandPage">
        <div className="col-sm-6  home__info">
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
          <Link to="#" className="home__info--Button">
            Yes Please <ArrowForwardRoundedIcon />
          </Link>{" "}
        </div>

        <div className="col-sm-6 home__head--pix"> </div>
        {/* <div className='alert-warning'> loremn bnaxdbjaskjdlksadlksad</div> */}
      </div>
    </div>
  );
}

export default LandPage;
