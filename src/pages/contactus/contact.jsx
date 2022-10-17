import React, { useState } from "react";
// import {useNavigate} from 'react-router-dom'
import style from "./contact.module.css";
import Fade from "react-reveal/Fade";

function Contact(props) {
  const [next, setNext] = useState(0);
  const texts = [
    {
      text: `We'll like to know you. Let's start by knowing your name. ...SO what's your name`,
    },
    {
      text: `Awesome! What's your email?`,
    },
    {
      text: `What's the greatest obstacle that's holding you back from hitting your revenue goal`,
    },
  ];
  // const clear=()=>{
  //   setEnterValue("")
  // }
  // const navigate=useNavigate()

  const handleChange = (event) => {
    const nextQuestion = next + 1;
    if (nextQuestion < texts.length) setNext(nextQuestion);
    
    // navigate('/');
    else props.history.push("/");
  };
  return (
    <div className={style.contact_body}>
      <div className="col-12 col-sm-12">
        <div className={style.texts}>
          <Fade left>
            <p className={style.texts_main}>{texts[next].text}</p>
            <input  type="text" className="form-control" />
            <button onClick={handleChange} className={style.contact_button}>
              Continue <i className="fa fa-sharp fa-solid fa-arrow-right"></i>
            </button>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default Contact;
