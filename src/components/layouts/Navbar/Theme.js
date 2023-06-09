import React, { useState } from "react";
import { BsSunFill, BsFillMoonFill } from "react-icons/bs";

function Theme() {
  // ** states
  const [theme, setTheme] = useState(true);

  // ** function to handle toggle
  const toggle = () => setTheme((prevState) => !prevState);

  return (
    <div className="theme">
      <button className="btn" type="button" onClick={toggle}>
        {theme ? <BsSunFill /> : <BsFillMoonFill />}
      </button>
    </div>
  );
}

export default Theme;
