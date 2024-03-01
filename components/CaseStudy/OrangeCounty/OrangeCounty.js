import React from "react";
import orange from "../../../public/images/orangeCounty/orange-county-logo.webp";
import Color from "../../../public/images/orangeCounty/orange-county-color-pallete.webp";
import Font from "../../../public/images/orangeCounty/orange-county-font.webp";
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
