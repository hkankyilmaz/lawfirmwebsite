import React from "react";
import "./InfoKocaerLaw.css";
import terazi from "./terazi.png";
import Logo from "../images/kocaersimge2.png";

const InfoKocaerLaw = (props) => {
  return (
    <div style={{ background: props.back }}>
      <div className="info-container">
        <img width="350px" height="200px" src={Logo} />
        <h2>{props.title}</h2>
        <p className="p-two"> {props.text} </p>
      </div>
    </div>
  );
};

export default InfoKocaerLaw;
