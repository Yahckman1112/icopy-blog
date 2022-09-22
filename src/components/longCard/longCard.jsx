import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";
import "./longCard.css";
function LongCard({ title, amount, body, link = "#" }) {
  return (
    <div>
      <div className=" col-12 col-sm-12 long_card">
        <Card className="">
          <CardContent>
            <span className="long_card_para1">{title}</span>
            <Divider light />
            <p className="long_card_para2">
              <span className="long_card_para2_main">
                $<span>{amount}</span>{" "}
              </span>
              <span className="long_card_para2_sub">/Month</span>
            </p>
            <Divider light />
            <p className="long_card_para3">{body}</p>
          </CardContent>

          <Divider light />

          <CardActions>
            <div className="long_btn_container">
              <Link className="long_card_btn" to={link}>
                Get Started{" "}
                <i className="fa fa-sharp fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}

export default LongCard;
