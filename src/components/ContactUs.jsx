import React from "react";
import "./ContactUs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faArrowRightFromFile,
} from "@fortawesome/free-solid-svg-icons";

const ContactUs = () => {
  return (
    <div className="contac-container">
      <div className="meeting">
        <div className="meeting-image">
          <div className="meeting-image-child"></div>
          <h5>
            Bizi ziyaret edin Hukuki süreçlerinizi yönetelim ve
            sonuçlandıralım...
            <FontAwesomeIcon className="arrow-right" icon={faArrowRight} fade />
          </h5>
        </div>

        <div className="meeting-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.6463473183817!2d29.027994615661605!3d40.98922422854553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab8658a694bb7%3A0x923b225d4840e0f9!2zR8O8bmXFn2luIFNvZnJhc8SxIE1leWhhbmU!5e0!3m2!1str!2str!4v1648778722213!5m2!1str!2str"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="contact-form_">
        <div className="contact-form">
          <div className="contact-us">
            <form className="form-home-page" action="#">
              <label htmlFor="customerName">
                NAME <em>&#x2a;</em>
              </label>
              <input
                id="customerName"
                name="customerName"
                required=""
                type="text"
              />
              <label htmlFor="customerEmail">
                EMAIL <em>&#x2a;</em>
              </label>
              <input
                id="customerEmail"
                name="customerEmail"
                required=""
                type="email"
              />
              <label htmlFor="customerPhone">PHONE</label>
              <input
                id="customerPhone"
                name="customerPhone"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                type="tel"
              />

              <label htmlFor="customerNote">
                YOUR MESSAGE <em>&#x2a;</em>
              </label>
              <textarea
                id="customerNote"
                name="customerNote"
                required=""
                rows="4"
              ></textarea>

              <button id="customerOrder">Mesaj Yolla</button>
            </form>
          </div>
        </div>
        <div className="contact-form-image">
          <div className="contact-form-child"></div>
          <h5>
            <FontAwesomeIcon
              className="arrow-left"
              icon={faArrowLeft}
              fade
              size="lg"
            />
            Sorunlarınız bize ulaştırın size çözümler sunalım...
          </h5>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
