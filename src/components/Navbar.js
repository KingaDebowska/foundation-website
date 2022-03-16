import React from "react";
import mylogo from "../nature.svg";
// react fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignRight, faBars } from "@fortawesome/free-solid-svg-icons";
import { faPaw } from "@fortawesome/free-solid-svg-icons";

const mystyle = {
  color: "white",
  padding: "10px",
};
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">
          <FontAwesomeIcon icon={faPaw} style={{ color: "#fff" }} />
          <span style={mystyle}>Przytul Psa</span>
          {/* <img className="logo" src={mylogo} alt="logo" /> */}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item ">
              <a className="nav-link active " aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/cegielki">
                Cegiełki
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/podopieczni">
                Nasi Podopieczni
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/galeria">
                Galeria
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/kontakt">
                Kontakt
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
