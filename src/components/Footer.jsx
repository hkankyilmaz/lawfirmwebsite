import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <p className="last-text">
        Tüm Hakları Saklıdır | <span className="register">®</span> 2022 Kocaer
        Hukuk Bürosu
      </p>
      <div className="left">
        <h5>Kocaer Hukuk Bürosu</h5>
        <hr></hr>
        <p>
          <strong>Adres: </strong> Abide-i Hürriyet Caddesi No:211 K:2 Şişli/İst
        </p>
        <p>
          <strong>Telefon: </strong> +90 533 935 15 19
          <p>
            <strong>WhatsApp: </strong>+90 533 935 15 19
          </p>
          <p>
            <strong>E-posta: </strong>info@kocaerlaw.com
          </p>
        </p>
      </div>

      <div className="right">
        <div className="useful-links">
          <h5>Faydalı Linkler</h5>

          <hr></hr>

          <ul>
            <li>
              <a>Adalet Bakanlığı</a>
            </li>
            <li>
              <a>Resmi Gazete</a>
            </li>
            <li>
              <a>E-devlet</a>
            </li>
            <li>
              <a>Mevzuat Bilgi Sistemi</a>
            </li>
            <li>
              <a>Anayasa Mahkemesi</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
          </ul>
        </div>
        <div className="working-zone-footer">
          <h5>Çalışma Alanlarımız</h5>
          <hr></hr>
          <ul>
            <li>
              <a>Dernek ve Vakıflar Hukuku</a>
            </li>
            <li>
              <a>Fikri Mülkiyet Hukuku</a>
            </li>
            <li>
              <a>Gayrimenkul Hukuku</a>
            </li>
            <li>
              <a>İcra İflas Hukuku</a>
            </li>
            <li>
              <a>İdare ve Vergi Hukuku</a>
            </li>
            <li>
              <a>İş ve Sosyal Güvenlik Hukuku</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
