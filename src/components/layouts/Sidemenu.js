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
      <p className="welcome-msg">{time === "AM" ? t("GOOD_MORNING") : t("GOOD_EVENING")}</p>
      <ul>
        <li></li>
      </ul>
    </div>
  );
}

export default Sidemenue;
