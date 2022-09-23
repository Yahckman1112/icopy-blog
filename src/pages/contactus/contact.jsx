import React, { useState } from "react";
import style from "./contact.module.css";

function Contact(props) {
  const [next, setNext] = useState(0);
  const texts = [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, ",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. , nam!",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing . Quis, nam!",
    },
    
  ];

  const handleChange = () => {
    const nextQuestion = next + 1;
    if (nextQuestion < texts.length) 
    setNext(nextQuestion);
    else 
    console.log("Im working");
  };
  return (
    <div className={style.contact_body}>
      <div className="col-12 col-sm-12">
        <div className={style.texts}>
          <p className={style.texts_main}> {texts[next].text} </p>
          <input type="text" className="form-control" />
          <button onClick={handleChange} className={style.contact_button}>
            Continue <i className="fa fa-sharp fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
