import React from "react";
import orange from "../../../public/images/vickek/logo.png";
import Color from "../../../public/images/vickek/color-pallete.png";
import Font from "../../../public/images/vickek/font.png";
import DesignTheme from "../Layout/DesignTheme";

const vicket = () => {
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

export default vicket;
