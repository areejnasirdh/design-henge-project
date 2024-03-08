import React from "react";
import BannerImg from "../../public/images/home_banner.png";
import Banner from "../Common/Banner/Banner";

const BannerSection = () => {
  return (
    <Banner
      stempt={true}
      heading="Boosting Business."
      second="Empowering Brands."
      third="Crafting Experiences."
      text="We're a digital marketing and branding agency based in Illinois, passionately creating impactful work with a focus on our clients and their success."
      img={BannerImg}
      navigate="/services"
    />
  );
};

export default BannerSection;
