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
              Avukat, yargı önünde; gerçek ya da tüzel kişilerin haklarını
              savunan, hukuk ve yasa işlerinde yol gösterici nitelik taşıyan
              kişiye verilen mesleki unvandır.
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
              Doğru olmanın kalitesi, doğruluk, tarafsızlık, adalet, hak
              edildiği şekilde ödül veya ceza, doğru, adil veya yasal olanı
              korumak için yetki ve gücün kullanılmasıdır.
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
              Kocaer Hukuk Bürosu sağladığı hukuki hizmetlerin Müvekkillerine
              dünya standartlarında bir hizmet ile özenle ve en yüksek kalitede
              sunulmasını hedefler.
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
