import React from "react";
import style from "./copyText.module.css";
function CopyTextUpper({title, text}) {
  console.log(style);
  return (
    <div className="col-12 col-sm-12">
      <p className={style.service}>{title}</p>
      <p className={style.text}>{text}</p>
    </div>
  );
}

export default CopyTextUpper;
