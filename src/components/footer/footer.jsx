import React from "react";
import "./footer.css";
import FooterList from "./footerList";
import { Link } from "react-router-dom";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import IconButton from "@mui/material/IconButton";
import GraphicEqRoundedIcon from "@mui/icons-material/GraphicEqRounded";
import Divider from "@mui/material/Divider";

function Footer(props) {
  return (
    <div className=" footer ">
      <div className="container-fluid">
        <IconButton className="card-logo" >
          <GraphicEqRoundedIcon sx={{ fontSize: "50px", margin:'0px' }}  className="color-yellow" />
        </IconButton>
        <span className="  footer_cop"> IcopyStory</span>



        <div className="row footer_mail-icons">
          <div className=" col-sx-12 col-sm-6 col-md-6 footer-send footer_social">
            <Link to="#" className="footer_mail--button">
              Send
            </Link>{" "}
            <input className="footer_mail--input" type="text" />
          </div>

          <div className="col-sx-12 col-sm-6 col-md-6 footer_social">
            <Link to="#">
              {" "}
              <BsTwitter style={{ color: "white", marginRight: "30px" }} />
            </Link>
            <Link to="#">
              {" "}
              <BsInstagram style={{ color: "white", marginRight: "30px" }} />
            </Link>

            <Link to="#">
              {" "}
              <FaLinkedinIn style={{ color: "white", marginRight: "30px" }} />
            </Link>
          </div>
        </div>
        <div className="footer_cop2">
          <span>
            Stories are magnets that attract prospects to your buisness
          </span>
        </div>

        <FooterList />

        <Divider variant="middle" color="white" style={{ marginTop: "30px" }} />
        <p className="designed_footer">
          <span>Designed and developed by </span> <br />
          <span>
            <Link to="/">Infinity Tech</Link>
          </span>
        </p>
      </div>
    </div>
  );
}

export default Footer;
