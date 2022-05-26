import React from "react";
import Judge from "./mahkeme3.jpg";
import "./Article.css";

const Article = (props) => {
  return (
    <div className="article-container">
      <img src={props.img} width="300px" height="175px" />
      <div className="article-body">
        <h5 className="article-title">{props.title} </h5>
        <p className="article-text"> {props.text} </p>
        <p className="muted">
          <small>3 gün önce</small>
        </p>
        <button className="article-btn">Devamı...</button>
      </div>
    </div>
  );
};

export default Article;
