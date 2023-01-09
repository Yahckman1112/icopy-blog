import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import "./card.css";
function CardComponent({ logo, title, text, link,move }) {
  return (
    <div className="row">
      <div className="card-design col-12 col-lg-12 col-md-12">
        <Card className="card">
          <CardContent>
            <IconButton
              className="card-logo"
              size="large"
              color="error"
              aria-label="delete"
            >
              {logo}
            </IconButton>{" "}
            <br />
            <span className="card-title">{title}</span> <br />
            <span className="card-text">{text}</span>
          </CardContent>
          <CardActions>
            <Link className="card-btn" to={`/${move}`}>
              {link}
            </Link>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}

export default CardComponent;
