import React from "react";
import "../../kontakt.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faMapMarkerAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Icon } from "@iconify/react";
import smileBeam from "@iconify/icons-fa-solid/smile-beam";
import heart from "../../heart.svg";

const mystyle2 = {
  icontext: {
    display: "flex",
    justifyContent: "flexStart",
    alignItems: "center",
    fontSize: "1rem",
    fontWeight: "300",
    marginBottom: ".9rem",
  },
  iconedit: {
    color: "#fff",
    fontSize: "1.2rem",
    marginRight: "2rem",
    flex: "0 0 20px",
    color: "rgba(255, 116, 23, .8)",
  },
  socialm: {
    fontSize: "25px",
    color: "rgba(255,255,255, 0.9)",
  },
};
const Kontakt = () => {
  return (
    <div className="container-kontakty">
      <h1>Contact Us</h1>
      {/* <p className="subtitle">Lorem ipsum</p> */}

      {/* <div id="contact-container"> */}
      <div className="contact-container">
        <div className="contact-info ">
          <h4>Contact Information</h4>
          <p>Fill up the form and click send.</p>
          <div className="icon-text" style={mystyle2.icontext}>
            <FontAwesomeIcon icon={faPhone} style={mystyle2.iconedit} />
            <span>787-901-807</span>
          </div>
          <div className="icon-text" style={mystyle2.icontext}>
            <FontAwesomeIcon icon={faEnvelope} style={mystyle2.iconedit} />
            <span>przytulpsa@gmail.com</span>
          </div>
          <div className="icon-text" style={mystyle2.icontext}>
            <FontAwesomeIcon icon={faMapMarkerAlt} style={mystyle2.iconedit} />

            <span>ul. Parkowa 5K, Ustanów, 05-540 Zalesie Górne</span>
          </div>
          <div className="social-media">
            <a href="#" className="icon-circle">
              <FontAwesomeIcon icon={faFacebookF} style={mystyle2.socialm} />
            </a>
            <a href="#" className="icon-circle">
              <FontAwesomeIcon icon={faInstagram} style={mystyle2.socialm} />
            </a>
            <a href="#" className="icon-circle">
              <FontAwesomeIcon icon={faYoutube} style={mystyle2.socialm} />
            </a>
          </div>
        </div>
        <form>
          <div className="col">
            <div className="form-group">
              <label className="label">Imię</label>
              <input id="inputtxt" type="text" />
            </div>
            <div className="form-group">
              <label className="label">Nazwisko</label>
              <input id="inputtxt" type="text" />
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label className="label">E-Mail</label>
              <input id="inputtxt" type="email" />
            </div>
            <div className="form-group">
              <label className="label">Telefon</label>
              <input id="inputtxt" type="tel" />
            </div>
          </div>
          {/* <div className="col"> */}
          <div className="form-group">
            <label className="label">
              Wybierz formę{" "}
              <span>
                <strong>pomocy</strong>
                {/* <img className="heart" src={heart} alt="heart" /> */}
              </span>
              <img className="heart" src={heart} alt="heart" />
              {/* <Icon className="mx-1" icon={smileBeam} /> */}
            </label>
            <div id="radio-buttons">
              <div className="radio-button">
                <input
                  id="radio-wsparcie"
                  type="radio"
                  name="type"
                  value="wsparcie"
                />
                <label className="label-radio" for="radio-wsparcie">
                  Darowizna
                </label>
              </div>
              <div className="radio-button">
                <input
                  id="radio-adopcja"
                  type="radio"
                  name="type"
                  value="adopcja"
                />
                <label className="label-radio" for="radio-adopcja">
                  Adopcja
                </label>
              </div>
              <div className="radio-button">
                <input
                  id="radio-wolontariat"
                  type="radio"
                  name="type"
                  value="wolontariat"
                />
                <label className="label-radio" for="radio-wolontariat">
                  Wolontariat
                </label>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label id="message" className="label">
                <span>Wiadomość:</span>
              </label>
              <textarea></textarea>
            </div>
          </div>
          <div className="col">
            <div className="form-group right ">
              <button
                id="SendButton"
                type="button"
                className="btn btn-outline-light"
              >
                Send Message
              </button>
            </div>
          </div>
          {/* </div> */}
        </form>
      </div>
    </div>
  );
};

export default Kontakt;

// export default function Kontakt(){
//   return(
//     <div className={styles.container}>
//       <Head></Head>
//     </div>
//   )
// }
