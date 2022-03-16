import React from "react";
import Typed from "react-typed";
import { useHistory } from "react-router-dom";

const Header = () => {
  let history = useHistory();
  const redirect = () => {
    history.push("/kontakt");
  };
  return (
    <div className="header-wraper">
      <div className="main-info">
        <h1>Znajdź swojego przyjaciela</h1>
        <Typed
          className="typed-text"
          strings={["Przyjdź", "Pokochaj", "Adoptuj"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        {/* <a href="#" className="btn-main-offer">
          Contact Us!
        </a> */}
        <button
          id="myButton"
          type="button"
          className="btn btn-outline-light"
          onClick={redirect}
        >
          Contact Us!
        </button>
      </div>
    </div>
  );
};

export default Header;
