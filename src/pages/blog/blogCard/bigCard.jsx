import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";
import "./bigCard.css";

function BigCard({ image, CardHeader, cardText, cardLink, linkName }) {
  return (
    <div className="">

    <div  className="bigCard">
      <Card sx={{ maxWidth: 600 }}>
        <CardMedia component="img" height="320" image={image} alt="BlogImage" />
        <CardContent>
          <p className="bigCard_para1">{CardHeader}</p>
          <p className="bigCard_para2">{cardText}</p>

          <Divider />
          <CardActions>
            <Link className="bigCard_Button" to={cardLink}>
              {linkName}{" "}
            </Link>
          </CardActions>
        </CardContent>
      </Card>
    </div>
    </div>
  );
}

export default BigCard;
