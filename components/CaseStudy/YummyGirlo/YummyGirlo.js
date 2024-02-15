import React from "react";
import Yummy from "../../../public/images/yummygurlo/yummy-girlo.png";
import Color from "../../../public/images/yummygurlo/colors.png";
import Font from "../../../public/images/yummygurlo/font.png";
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
