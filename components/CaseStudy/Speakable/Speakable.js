import React from "react";
import orange from "../../../public/images/Speakable/speakable-logo.png";
import Color from "../../../public/images/Speakable/speakable-color-pallete.png";
import Font from "../../../public/images/Speakable/speakable-font.png";
import DesignTheme from "../Layout/DesignTheme";

const Speakable = () => {
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

export default Speakable;
