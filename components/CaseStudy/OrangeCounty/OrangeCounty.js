import React from "react";
import orange from "../../../public/images/orangeCounty/orange-county-logo.png";
import Color from "../../../public/images/orangeCounty/Orange-county-color-pallete.png";
import Font from "../../../public/images/orangeCounty/Orange-county-font.png";
import DesignTheme from "../Layout/DesignTheme";

const OrangeCounty = () => {
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

export default OrangeCounty;
