import React from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const bg = document.querySelector(".home-page");

    let load = 0;

    let int = setInterval(blurring, 25);

    function blurring() {
      load++;

      if (load > 99) {
        clearInterval(int);
      }

      bg.style.filter = `blur(${scale(load, 0, 100, 25, 0)}px)`;
    }

    const scale = (num, in_min, in_max, out_min, out_max) => {
      return (
        ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
      );
    };
  });

  return (
    <div className="home-page">
      <div className="home-page-child"></div>

      <h4>
        <div className="brand-sperator sperator-two"></div>
        Yenilikçi Bakış Açısıyla İhtiyaca Yönelik Çözümler Sunan bir Hukuk
        bürosu...
        <hr className="home-hr"></hr>
      </h4>
      <FontAwesomeIcon
        className="arrow-down"
        icon={faArrowDown}
        size="2x"
        fade
      />
    </div>
  );
};

export default Home;
