import { useEffect } from "react";
import React from "react";
import "./Navbar.css";
import { Link, useLinkClickHandler } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import $ from "jquery";

const Navbar = () => {
  useEffect(() => {
    const nav = document.querySelector(".nav");
    window.addEventListener("scroll", fixNav);

    function fixNav() {
      if (window.scrollY > 10) {
        nav.classList.add("active");
      } else {
        nav.classList.remove("active");
      }
    }
  });

  useEffect(() => {
    const open_btn = document.querySelector(".open-btn");
    const close_btn = document.querySelector(".close-btn");
    const nav = document.querySelectorAll(".nav_");
    const links = document.querySelectorAll("a");

    open_btn.addEventListener("click", () => {
      nav.forEach((nav_el) => nav_el.classList.add("visible"));
    });

    close_btn.addEventListener("click", () => {
      nav.forEach((nav_el) => nav_el.classList.remove("visible"));
    });

    links.forEach((element) => {
      element.addEventListener("click", () => {
        nav.forEach((nav_el) => nav_el.classList.remove("visible"));
      });
    });
  });

  return (
    <nav className="nav">
      <div className="container">
        <h5 className="logo-one">
          <a href="/">
            <span className="brand-name">KOCAER</span>
            <div className="brand-sperator"></div>
            <span className="brand-text">HUKUK BÜROSU</span>
          </a>
        </h5>
        <div className="nav-btnn">
          <button class="nav_-btn open-btn">
            <FontAwesomeIcon className="bars" icon={faBars} size="2x" />
          </button>

          <div class="nav_ nav_-black">
            <div class="nav_ nav_-red">
              <div class="nav_ nav_-white">
                <button class="nav_-btn close-btn">
                  <FontAwesomeIcon
                    icon={faXmark}
                    size="2x"
                    style={{ color: "white", zIndex: "12" }}
                  />
                </button>
                <ul className="list-two">
                  <li>
                    <Link to="/" className="current">
                      Anasayfa
                      <hr></hr>
                    </Link>
                  </li>
                  <li>
                    <Link to="aboutus">
                      Hakkımızda<hr></hr>
                    </Link>
                  </li>
                  <li>
                    <Link to="team">
                      Ekibimiz<hr></hr>
                    </Link>
                  </li>
                  <li>
                    <Link to="workingzones">
                      Çalışma Alanlarımız<hr></hr>
                    </Link>
                  </li>
                  <li>
                    <Link to="contact">
                      İletişim<hr></hr>
                    </Link>
                  </li>
                  <li style={{ marginBottom: "20px" }}>
                    <Link to="blog">
                      Blog<hr></hr>
                    </Link>
                  </li>
                  <h5 className="logo">
                    <a href="/">
                      <span className="brand-name-two">KOCAER</span>
                      <div className="brand-sperator"></div>
                      <span className="brand-text-two">HUKUK BÜROSU</span>
                    </a>
                  </h5>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <ul className="list-one">
          <li>
            <Link to="/" className="current">
              Anasayfa
            </Link>
          </li>
          <li>
            <Link to="aboutus">Hakkımızda</Link>
          </li>
          <li>
            <Link to="team">Ekibimiz</Link>
          </li>
          <li>
            <Link to="workingzones">Çalışma Alanlarımız</Link>
          </li>
          <li>
            <Link to="contact">İletişim</Link>
          </li>
          <li>
            <Link to="blog">Blog</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
