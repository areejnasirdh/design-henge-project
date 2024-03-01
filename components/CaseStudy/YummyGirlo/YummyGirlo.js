import React from "react";
import Yummy from "../../../public/images/yummygurlo/yummy-girlo.webp";
import Color from "../../../public/images/yummygurlo/colors.webp";
import Font from "../../../public/images/yummygurlo/font.webp";
import DesignTheme from "../Layout/DesignTheme";

const YummyGirlo = () => {
  return (
    <DesignTheme
      Logo={Yummy}
      Color={Color}
      text="To ensure the integrity of the brand consistent typography is to
    be used throughout all communications as specified below."
      Font={Font}
    />
    
  );
};

export default YummyGirlo;
