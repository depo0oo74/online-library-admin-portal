import React, { useState } from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

// ** import default profile picture
import avatarPic from "../../../assets/images/avatarTest.jpg";

function Avatar() {
  // ** states
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // ** function to handle toggle
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <div className="avatar">
      <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={"up"}>
        <DropdownToggle>
          <img src={avatarPic} alt="avatarPicture" />
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Profile</DropdownItem>
          <DropdownItem>Logout</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

export default Avatar;
