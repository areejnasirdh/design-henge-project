import React from "react";
import orange from "../../../public/images/Zego/logo.webp";
import Color from "../../../public/images/Zego/Colorpallete.webp";
import Font from "../../../public/images/Zego/font.webp";
import DesignTheme from "../Layout/DesignTheme";

const Zego = () => {
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

export default Zego;
