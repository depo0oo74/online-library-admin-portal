import React from "react";

// ** import logo
import Logo from "../../assets/images/logo.png";

import { BsGlobe } from "react-icons/bs";

function Navbar() {
  return (
    <nav className="navbar">
      <a className="btn" href="/">
        <img src={Logo} alt="logo" />
      </a>
      <div>
        <BsGlobe />
      </div>
    </nav>
  );
}

export default Navbar;
