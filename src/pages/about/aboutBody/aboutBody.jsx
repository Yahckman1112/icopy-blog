import React from "react";
import "./aboutBody.css";
import AboutText from "./aboutText";
import { Texts } from "./text";


function AboutBody(props) {
  console.log(Texts[0]);
  return (
    <div className="container about_body col-12 col-sx-12 col-sm-9">
      <p className="about_para1 alert-warning col-sm-3 col-12">
        Wanna know more about me?
      </p>
    <div className="about_para_1">
      <AboutText
        text={Texts.map((text, i) => (
          <p key={i}>{text.text1}</p>
        ))}
      />
    </div>
      <AboutText
        text={Texts.map((text) => (
          <p>{text.text2}</p>
        ))}
      />
    </div>
  );
}

export default AboutBody;
