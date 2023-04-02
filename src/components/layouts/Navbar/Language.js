import React, { useState } from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { BsGlobe } from "react-icons/bs";
import { useTranslation } from "react-i18next";

function Language() {
  // ** hooks
  const { t } = useTranslation();

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
          <DropdownItem>{t("ARABIC")}</DropdownItem>
          <DropdownItem>{t("ENGLISH")}</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

export default Language;
