import React, { useState } from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { useTranslation } from "react-i18next";

// ** import default profile picture
import avatarPic from "../../../assets/images/avatarTest.jpg";

function Avatar() {
  // ** hooks
  const { t } = useTranslation();

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
          <DropdownItem>{t("PROFILE")}</DropdownItem>
          <DropdownItem>{t("LOGOUT")}</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

export default Avatar;
