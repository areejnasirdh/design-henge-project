import React from "react";
import BannerImg from "../../public/images/home_banner.png";
import Banner from "../Common/Banner/Banner";

const BannerSection = () => {
  return (
    <Banner
      heading="PROPEL YOUR BRANDS."
      subHeading="TOWARDS SUCCESS WITH DESIGN HENGE."
      text="We're a digital marketing and branding agency based in Illinois, passionately creating impactful work with a focus on our clients and their success."
      img={BannerImg}
      navigate="/services"
    />
  );
};

export default BannerSection;
