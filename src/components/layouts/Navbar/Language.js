import React, { useState } from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { BsGlobe } from "react-icons/bs";

function Language() {
  // ** states
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // ** function to handle toggle
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div className="lang">
      <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={"up"}>
        <DropdownToggle>
          <BsGlobe />
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Arabic</DropdownItem>
          <DropdownItem>English</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

export default Language;
