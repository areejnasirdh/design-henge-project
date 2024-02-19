import React from "react";
import BannerImg from "../../public/images/home_banner.png";
import Banner from "../Common/Banner/Banner";

const BannerSection = () => {
  return (
    <Banner
      heading="Building Brands."
      subHeading="Creating Experiences. Transforming."
      text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit,sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna."
      img={BannerImg}
      navigate="/services"
    />
  );
};

export default BannerSection;
