import React, { useState } from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { BsFillBellFill } from "react-icons/bs";
import { useTranslation } from "react-i18next";

function Notification() {
  // ** hooks
  const { t } = useTranslation();

  // ** states
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // ** function to handle toggle
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div className="notification">
      <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={"up"}>
        <DropdownToggle>
          <BsFillBellFill />
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Notification 1</DropdownItem>
          <DropdownItem>Notification 2</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

export default Notification;
