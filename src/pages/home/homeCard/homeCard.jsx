import React from "react";
import CardComponent from "../../../components/card/card";
import "./homeCard.css";
import InventoryIcon from "@mui/icons-material/Inventory";
import AcUnitRoundedIcon from "@mui/icons-material/AcUnitRounded";
import HideSourceRoundedIcon from "@mui/icons-material/HideSourceRounded";
// modular css
function HomeCard(props) {
  return (
    <div>
      <div className="home-card row">
        <div className="col-12 col-sx-12   col-sm-4">
          <CardComponent

            logo=<InventoryIcon sx={{ fontSize: "50px" }} />
            title="copy writing"
            text=" Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Non facilis tenetur vel ad provident fuga eum voluptates 
           impedit ut similique!"
            link="Get Sarted"
          />
        </div>
        <div className="col-12 col-sx-12   col-sm-4">
          <CardComponent
            logo=<AcUnitRoundedIcon sx={{ fontSize: "50px" }} />
            title="SEO ptimization"
            text=" Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Non facilis tenetur vel ad provident fuga eum voluptates 
           impedit ut similique!"
            link="Get Sarted"
          />
        </div>
        <div className="col-12  col-sx-12   col-sm-4">
          <CardComponent
            logo=<HideSourceRoundedIcon sx={{ fontSize: "50px" }} />
            title="Email Marketting"
            text=" Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Non facilis tenetur vel ad provident fuga eum voluptates 
           impedit ut similique!"
            link="Get Sarted"
          />
        </div>
      </div>
    </div>
  );
}

export default HomeCard;