import React, { useState, useEffect } from "react";
import moment from "moment/moment";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  BsFillHouseDoorFill,
  BsFillQuestionCircleFill,
  BsFillPeopleFill,
  BsSliders,
  BsGrid3X3GapFill,
  BsFillEnvelopeFill,
  BsFillPencilFill,
  BsFillFileTextFill,
  BsRocketTakeoffFill,
} from "react-icons/bs";

function Sidemenue() {
  // ** hooks
  const { t } = useTranslation();

  // ** states
  const [time, setTime] = useState(moment().format("LT").split(" ")[1]);

  useEffect(() => {
    setInterval(() => {
      setTime(moment().format("LT").split(" ")[1]);
    }, 60000);
  }, []);
  return (
    <div className="sidemenu">
      <h6>{time === "AM" ? t("GOOD_MORNING") : t("GOOD_EVENING")} .. Ahmed !!</h6>
      <ul>
        <li>
          <NavLink className="btn" to={"/" || "dashboard"}>
            <BsFillHouseDoorFill /> <span>{t("DASHBOARD")}</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="btn" to="/sliders">
            <BsSliders /> <span>{t("SLIDERS")}</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="btn" to="/sections">
            <BsGrid3X3GapFill /> <span>{t("SECTIONS")}</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="btn" to="/users">
            <BsFillPeopleFill /> <span>{t("USERS")}</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="btn" to="/goals">
            <BsRocketTakeoffFill /> <span>{t("GOALS")}</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="btn" to="/faqs">
            <BsFillQuestionCircleFill /> <span>{t("FAQS")}</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="btn" to="/messages">
            <BsFillEnvelopeFill /> <span>{t("MESSAGES")}</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="btn" to="/policies">
            <BsFillFileTextFill /> <span>{t("PRIVACY_POLICIES")}</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="btn" to="/publishing-houses">
            <BsFillPencilFill /> <span>{t("PUBLISHING_HOUSES")}</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidemenue;
