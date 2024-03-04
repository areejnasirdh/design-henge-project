import React from "react";
import BannerImg from "../../public/images/home_banner.png";
import Banner from "../Common/Banner/Banner";

const BannerSection = () => {
  return (
    <Banner
      heading="Boosting Business."
      subHeading="Empowering Brands. Crafting Experiences."
      text="We're a digital marketing and branding agency based in Illinois, passionately creating impactful work with a focus on our clients and their success."
      img={BannerImg}
      navigate="/services"
    />
  );
};

export default BannerSection;
