import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Article from "./Article";
import ArticlesMini from "./ArticlesMini";
import IconWrapper from "./IconWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import ArticleImageOne from "../images/article-1-img-pass.jpg";
import ArticleImageTwo from "../images/article-2-img-work.jpg";
import ArticleImageThree from "../images/article-3-img-container.jpg";

import "./Slider.css";

const Slider = () => {
  return (
    <div className="article-container_">
      <div className="container article-container-header">
        <h3>
          <div className="line-articles"></div> Blog Yazılarımız
        </h3>
        <p>
          Kocaer Hukuk Bürosu olarak, müvekkilerimizin ve danışanlarımızın
          değişen ihtiyaçlarına uygun hukuki desteği sağlayabilmek adına,
          ülkemizdeki ve dünyadaki hukuki ve ekonomik gelişmeleri yakından takip
          etmek suretiyle, kendimizi sürekli olarak güncellemeyi ve geliştirmeyi
          amaçlamaktayız.
        </p>
        <h4>Son Eklenen yazılarımız...</h4>
      </div>

      <div className="container articles">
        <div className="main-articles">
          <Article
            img={ArticleImageOne}
            title="Yatrım Yoluyla İstisnai Türk Vatandaşlığı Kazanımı"
            text="19.09.2018 tarihli Resmî Gazete’de yayımlanan 106 sayılı Cumhurbaşkanlığı Kararı ve son olarak 7.12.2018 tarihli Resmî Gazete’de yayımlanan 418 sayılı Cumhurbaşkanlığı Kararı ile yapılan değişiklikler ile birlikte; Türk Vatandaşlığı Kanununun Uygulanmasına İlişkin Yönetmeliğin... "
          />
          <Article
            img={ArticleImageTwo}
            title="Küçük ve Orta Büyüklükteki İşletmelerin Tanımı, Nitelikleri ve Sınıflandırılması Hakkında Yönetmelikte Değişiklik"
            text="Yapılan Yönetmelik değişikliğiyle; küçük ve orta büyüklükte işletme (“KOBİ”) tanımında aranan yıllık net satış hasılatı veya mali bilançosundan herhangi birinin 125.000.000 Türk Lirası (yüzyirmibeş milyon Türk Lirası)’nı aşmaması şartı, 250.000.000 Türk Lirası (ikiyüzelli milyon Türk Lirası) olarak güncellenmiştir..."
          />
          <Article
            className="articles-article-third"
            img={ArticleImageThree}
            title="Gümrük Kanunu’nun Bazı Maddelerinin Uygulanması Hakkında Kararda Değişiklik Yapılmasına Dair 5303 Sayılı Cumhurbaşkanı Kararı Resmî Gazetede yayınlandı."
            text="İşbu düzenlemeyle, internet üzerinden yapılan, ticari mahiyet arz etmeyen ve posta veya hızlı kargo taşımacılığı yoluyla gerçek kişiye teslim edilen alışverişlerde; eşyanın değeri üzerinden hesaplanması suretiyle..."
          />
        </div>
      </div>

      <div className="social">
        <div className="icons">
          <FontAwesomeIcon icon={faLinkedin} size="3x" className="facebook" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
