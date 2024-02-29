import React from "react";
import orange from "../../../public/images/Dreamshot/logo.webp";
import Color from "../../../public/images/Dreamshot/Colorpallete.webp";
import Font from "../../../public/images/Dreamshot/font.webp";
import DesignTheme from "../Layout/DesignTheme";

const dreamshot = () => {
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

export default dreamshot;
