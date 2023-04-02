import React from "react";

// ** import logo
import Logo from "../../../assets/images/logo.png";

// ** import navbar contents
import Avatar from "./Avatar";
import Notification from "./Notification";
import Theme from "./Theme";
import Language from "./Language";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="brand">
        <a className="btn" href="/">
          <img src={Logo} alt="logo" />
        </a>
      </div>
      <div className="nav-content">
        <Language />
        <Theme />
        <Notification />
        <Avatar />
      </div>
    </nav>
  );
}

export default Navbar;
