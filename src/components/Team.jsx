import React from "react";
import DenizSuna from "../images/denizsuna.jpg";
import "./Team.css";

const Team = () => {
  return (
    <div className="container denizsuna-info-container">
      <h3 className="working-zone-header">
        <div className="working-zone-headers-line"></div> Ekibimiz
      </h3>
      <div className="denizsuna-info-container-two">
        <img src={DenizSuna} />
        <div className="denizsuna-info-text-container">
          <p className="deniz-info-header"> Deniz Suna KOCAER</p>
          <p className="deniz-info-header">Avukat</p>
          <br />
          <p className="deniz-info-header">Eğitim</p>
          <p className="deniz-info-text">
            İstanbul Üniversitesi, Hukuk Fakültesi,2018
          </p>
          <br />
          <p className="deniz-info-header">Baro Kaydı</p>
          <p className="deniz-info-text">İstanbul Barosu</p>
          <br />
          <p className="deniz-info-header">Konuştuğu Diller</p>
          <p className="deniz-info-text">Türkçe,İngilizce</p>
        </div>
      </div>
    </div>
  );
};
export default Team;
