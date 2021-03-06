import React from "react";
import "./CardF.css";
import $ from "jquery";
import Slider1 from "./slider1.jpg";

const CardF = () => {
  var $cards = $(".card-object"),
    $faceButtons = $(".face");

  $faceButtons.on("click", flipCard);

  function flipCard(event) {
    event.preventDefault();

    var $btnFace = $(this),
      $card = $btnFace.parent(".card-object");

    if ($card.hasClass("flip-in")) {
      closeCards();
    } else {
      closeCards();
      openCard($card);
    }
  }

  function closeCards() {
    $cards.each(function () {
      $(this)
        .filter(".flip-in")
        .removeClass("flip-in")
        .queue(function () {
          // Force reflow hack
          var reflow = this.offsetHeight;
          $(this).addClass("flip-out").dequeue();
        });
    });
  }

  function openCard($card) {
    $card.removeClass("flip-out").queue(function () {
      // Force reflow hack
      var reflow = this.offsetHeight;
      $(this).addClass("flip-in").dequeue();
    });
  }

  return (
    <div className="centerflipcards">
      <hr></hr>
      <br></br>
      <br></br>
      <div className="square-flip">
        <div className="square">
          <div className="square-container">
            <div className="align-center">
              <img
                src="http://titanicthemes.com/files/flipbox/kallyas2.png"
                className="boxshadow"
                alt=""
              />
            </div>
            <h2 className="textshadow">Avukat Kimdir ?</h2>
            <h3 className="textshadow"></h3>
          </div>
          <div className="flip-overlay-11">
            <div className="flip-overlay-1-child"></div>
          </div>
        </div>
        <div
          style={{ backgroundImage: Slider1 }}
          className="square2"
          data-image="https://images.unsplash.com/photo-1477313372947-d68a7d410e9f?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb"
        >
          <div className="square-container2">
            <div className="align-center"></div>
            <h2>
              Avukat, yarg?? ??n??nde; ger??ek ya da t??zel ki??ilerin haklar??n??
              savunan, hukuk ve yasa i??lerinde yol g??sterici nitelik ta????yan
              ki??iye verilen mesleki unvand??r.
            </h2>
          </div>
          <div className="flip-overlay-2"></div>
        </div>
      </div>

      <div className="square-flip">
        <div
          className="square"
          data-image="https://images.unsplash.com/photo-1477313372947-d68a7d410e9f?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb"
        >
          <div className="square-container">
            <div className="align-center">
              <img
                src="http://titanicthemes.com/files/flipbox/kallyas2.png"
                className="boxshadow"
                alt=""
              />
            </div>
            <h2 className="textshadow">Adalet Nedir ?</h2>
            <h3 className="textshadow"></h3>
          </div>
          <div className="flip-overlay-21">
            <div className="flip-overlay-1-child"></div>
          </div>
        </div>
        <div
          className="square2"
          data-image="https://images.unsplash.com/photo-1477313372947-d68a7d410e9f?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb"
        >
          <div className="square-container2">
            <div className="align-center"></div>
            <h2>
              Do??ru olman??n kalitesi, do??ruluk, tarafs??zl??k, adalet, hak
              edildi??i ??ekilde ??d??l veya ceza, do??ru, adil veya yasal olan??
              korumak i??in yetki ve g??c??n kullan??lmas??d??r.
            </h2>
          </div>
          <div className="flip-overlay-2"></div>
        </div>
      </div>
      <div className="square-flip">
        <div
          className="square"
          data-image="https://images.unsplash.com/photo-1477313372947-d68a7d410e9f?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb"
        >
          <div className="square-container">
            <div className="align-center">
              <img
                src="http://titanicthemes.com/files/flipbox/kallyas2.png"
                className="boxshadow"
                alt=""
              />
            </div>
            <h2 className="textshadow">Misyonumuz...</h2>
            <h3 className="textshadow"></h3>
          </div>
          <div className="flip-overlay-31">
            <div className="flip-overlay-1-child"></div>
          </div>
        </div>
        <div
          className="square2"
          data-image="https://images.unsplash.com/photo-1477313372947-d68a7d410e9f?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb"
        >
          <div className="square-container2">
            <div className="align-center"></div>
            <h2>
              Kocaer Hukuk B??rosu sa??lad?????? hukuki hizmetlerin M??vekkillerine
              d??nya standartlar??nda bir hizmet ile ??zenle ve en y??ksek kalitede
              sunulmas??n?? hedefler.
            </h2>
          </div>
          <div className="flip-overlay-2"></div>
        </div>
      </div>

      <div className="clearfix"></div>

      <br />
      <br />
      <br />
    </div>
  );
};

export default CardF;
