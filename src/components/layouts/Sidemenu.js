import React, { useState, useEffect } from "react";
import moment from "moment/moment";
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
  const [time, setTime] = useState(null);

  useEffect(() => {
    setInterval(() => {
      setTime(moment().format("LT").split(" ")[1]);
    }, 60000);
  }, []);
  return (
    <div className="sidemenu">
      <h6>{time === "AM" ? t("GOOD_MORNING") : t("GOOD_EVENING")}, Ahmed !!</h6>
      <ul>
        <li>
          <BsFillHouseDoorFill /> <span>{t("DASHBOARD")}</span>
        </li>
        <li>
          <BsSliders /> <span>{t("SLIDERS")}</span>
        </li>
        <li>
          <BsGrid3X3GapFill /> <span>{t("SECTIONS")}</span>
        </li>
        <li>
          <BsFillPeopleFill /> <span>{t("USERS")}</span>
        </li>
        <li>
          <BsRocketTakeoffFill /> <span>{t("GOALS")}</span>
        </li>
        <li>
          <BsFillQuestionCircleFill /> <span>{t("FAQS")}</span>
        </li>
        <li>
          <BsFillEnvelopeFill /> <span>{t("MESSAGES")}</span>
        </li>
        <li>
          <BsFillFileTextFill /> <span>{t("PRIVACY_POLICIES")}</span>
        </li>
        <li>
          <BsFillPencilFill /> <span>{t("PUBLISHING_HOUSES")}</span>
        </li>
      </ul>
    </div>
  );
}

export default Sidemenue;
