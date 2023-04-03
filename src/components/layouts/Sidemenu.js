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
          <a className="btn active" href="/">
            <BsFillHouseDoorFill /> <span>{t("DASHBOARD")}</span>
          </a>
        </li>
        <li>
          <a className="btn" href="/">
            <BsSliders /> <span>{t("SLIDERS")}</span>
          </a>
        </li>
        <li>
          <a className="btn" href="/">
            <BsGrid3X3GapFill /> <span>{t("SECTIONS")}</span>
          </a>
        </li>
        <li>
          <a className="btn" href="/">
            <BsFillPeopleFill /> <span>{t("USERS")}</span>
          </a>
        </li>
        <li>
          <a className="btn" href="/">
            <BsRocketTakeoffFill /> <span>{t("GOALS")}</span>
          </a>
        </li>
        <li>
          <a className="btn" href="/">
            <BsFillQuestionCircleFill /> <span>{t("FAQS")}</span>
          </a>
        </li>
        <li>
          <a className="btn" href="/">
            <BsFillEnvelopeFill /> <span>{t("MESSAGES")}</span>
          </a>
        </li>
        <li>
          <a className="btn" href="/">
            <BsFillFileTextFill /> <span>{t("PRIVACY_POLICIES")}</span>
          </a>
        </li>
        <li>
          <a className="btn" href="/">
            <BsFillPencilFill /> <span>{t("PUBLISHING_HOUSES")}</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidemenue;
