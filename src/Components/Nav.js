import React, { useState, useEffect } from "react";
import "../Css/Nav.css";
import Logo from "../Image/netflixlogo.png";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img className="nav_logo" src={Logo} alt="Netflix Logo" />
      {/* <Avatar className="nav_avatar" /> */}
    </div>
  );
}

export default Nav;
