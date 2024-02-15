import React from "react";
import orange from "../../../public/images/power_atm/logo.png";
import Color from "../../../public/images/power_atm/color-pallete.png";
import Font from "../../../public/images/power_atm/font.png";
import DesignTheme from "../Layout/DesignTheme";

const PowerAtm = () => {
  return (
    <DesignTheme
      Logo={orange}
      Color={Color}
      text="To ensure the integrity of the brand consistent typography is to
    be used throughout all communications as specified below."
      Font={Font}
    />
  );
};

export default PowerAtm;
