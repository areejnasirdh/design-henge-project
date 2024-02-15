import React from "react";
import orange from "../../../public/images/Zego/logo.png";
import Color from "../../../public/images/Zego/Colorpallete.png";
import Font from "../../../public/images/Zego/font.png";
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
