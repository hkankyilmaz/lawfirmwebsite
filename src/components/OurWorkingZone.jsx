import React from "react";
import "./OurWorkingZone.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faBusinessTime,
  faCreditCard,
  faFolderClosed,
  faGem,
  faHandshake,
  faHouse,
  faMoneyBill1Wave,
  faPeopleArrowsLeftRight,
  faPeopleRoof,
  faPersonWalkingArrowLoopLeft,
  faWater,
} from "@fortawesome/free-solid-svg-icons";
import FamilyLaw from "../images/ailehukuku.jpg";
import TradeLaw from "../images/bilisimvee.jpg";
import CaseLaw from "../images/takipsizlik.jpg";
import SeaLaw from "../images/denizticareti.jpg";
import VakıfLaw from "../images/vakıflar.jpg";
import ideaLaw from "../images/fikri.jpg";
import PropertyLaw from "../images/gayrimenkul.jpg";
import IcraLaw from "../images/icra.jpg";
import TaxfLaw from "../images/vakıflar.jpg";
import { Link } from "react-router-dom";

const OurWorkingZones = () => {
  return (
    <div className="zones-container">
      <div className="zones-container-child"></div>
      <div className="zones-info">
        <h2>
          <div className="line-zone"></div>
          Çalışma Alanlarımız
          <button className="zones-info-btn">
            <Link to="workingzones">Tümüne Bak</Link>
          </button>
        </h2>
        <p></p>
      </div>
      <div className="zones first-zones" style={{ marginBottom: "30px" }}>
        <div className="zone first-zones-first-zone">
          <FontAwesomeIcon icon={faPeopleRoof} className="zones-icons" />
          <img className="zone-left-image" src={FamilyLaw} />
          <button className="zone-btn-left zone-btn">Devamını Oku</button>
          <h4>Aile Hukuku</h4>
          <p>
            Kocaer Hukuk Bürosu gerek Türk vatandaşları gerekse Türk vatandaşı
            ve yabancılar arasındaki evlenme, nişanlanma, boşanma, nafaka
            yükümlülükleri...
          </p>
        </div>

        <div className="zone first-zones-second-zone">
          <img className="zone-right-middle-up-image" src={TradeLaw} />
          <button className="zone-btn-middle-up zone-btn">Devamını Oku</button>
          <FontAwesomeIcon icon={faCreditCard} className="zones-icons" />
          <h4>Bilişim ve Ticaret Hukuku</h4>
          <p>
            Ofisimiz, bilgi teknolojileri, telekomünikasyon, yazılım, bilgi
            güvenliği, lisanslama, fikri mülkiyet hakları yönetimi ve e-ticaret
            gibi alanlarda...
          </p>
        </div>

        <div className="zone first-zones-last-zone">
          <img className="zone-right-image" src={CaseLaw} />
          <button className="zone-btn-right zone-btn">Devamını Oku</button>

          <FontAwesomeIcon
            icon={faPeopleArrowsLeftRight}
            className="zones-icons"
          />
          <h4>Dava Takip Çözümü</h4>
          <p>
            Kocaer Hukuk Bürosu, müvekkillerine ulusal ve uluslararası alanda
            başlıca aşağıda sıralanmış olan uyuşmazlık konularında...
          </p>
        </div>
      </div>
      <div className="zones second-zones" style={{ marginBottom: "30px" }}>
        <div className="zone">
          <img className="zone-left-image" src={SeaLaw} />
          <button className="zone-btn-left zone-btn">Devamını Oku</button>
          <FontAwesomeIcon icon={faWater} className="zones-icons" />
          <h4>Deniz Ticareti Hukuku</h4>
          <p>
            Kocaer Hukuk Bürosu, yerli ve yabancı müvekkillerine deniz ticareti
            hukuku alanında danışmanlık hizmeti vermekte...
          </p>
        </div>

        <div className="zone ">
          <img className="zone-middle-center-image" src={VakıfLaw} />
          <button className="zone-btn-middle-center zone-btn">
            Devamını Oku
          </button>
          <FontAwesomeIcon icon={faHandshake} className="zones-icons" />
          <h4>Dernekler ve Vakıf Hukuku</h4>
          <p>
            Büromuz; sektörel, meslek grubu, kültür, spor ve sanat başta olmak
            üzere farklı alanlarda faaliyet gösteren yerli ve yabancı dernek...
          </p>
        </div>

        <div className="zone second-zones-last-zone">
          <img className="zone-right-image" src={ideaLaw} />
          <button className="zone-btn-right zone-btn">Devamını Oku</button>

          <FontAwesomeIcon icon={faGem} className="zones-icons" />
          <h4>Fikri Mülkiyet Hukuku</h4>
          <p>
            Dünyanın hızla globalleşmesiyle birlikte uluslararası ticaretin
            hızla gelişmesi, ulusal ve uluslararası şirketlerin ürün ve
            hizmetlerinin...
          </p>
        </div>
      </div>
      <div className="zones last-zone" style={{ marginBottom: "30px" }}>
        <div className="zone">
          <img className="zone-left-image" src={PropertyLaw} />
          <button className="zone-btn-left zone-btn">Devamını Oku</button>
          <FontAwesomeIcon icon={faHouse} className="zones-icons" />
          <h4>Gayrimenkul Hukuku</h4>
          <p>
            Kocaer Hukuk Bürosu olarak, yerli ve yabancı mülkiyet sahiplerine ve
            yatırımcılara, mülkiyetin devri ve yönetimi konularında...
          </p>
        </div>

        <div className="zone">
          <img className="zone-right-middle-down-image" src={IcraLaw} />
          <button className="zone-btn-middle-down zone-btn">
            Devamını Oku
          </button>
          <FontAwesomeIcon icon={faBriefcase} className="zones-icons" />
          <h4>İcra ve İflas Hukuku</h4>
          <p>
            Ofisimiz, alacağın tahsili amaçlı icra takipleri süreçlerini ve
            alacaklı/borçlu ve üçüncü kişiler arasındaki uyuşmazlıkların çözümü
            için icra...
          </p>
        </div>

        <div className="zone">
          <img className="zone-right-image" src={FamilyLaw} />
          <button className="zone-btn-right zone-btn ">Devamını Oku</button>
          <FontAwesomeIcon icon={faMoneyBill1Wave} className="zones-icons" />
          <h4>İdare ve Vergi Hukuku</h4>
          <p>
            Ofisimiz, alacağın tahsili amaçlı icra takipleri süreçlerini ve
            alacaklı/borçlu ve üçüncü kişiler arasındaki uyuşmazlıkların
            çözümü...
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurWorkingZones;
