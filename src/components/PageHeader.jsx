import React from "react";
import "./PageHeader.css";

const PageHeader = (props) => {
  return (
    <div
      className="page-header "
      style={{ backgroundImage: `url('${props.img}')` }}
    >
      <div className="container container-info-page-header">
        <p className="page-title"> {props.title} </p>
        <p className="page-path">{props.path} </p>
      </div>
      <div className="page-header-child"></div>
    </div>
  );
};

export default PageHeader;
