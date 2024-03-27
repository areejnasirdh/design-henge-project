import React from "react";
import Navbar from "@/components/Common/Navbar/Navbar";
import Banner from "@/components/Common/Banner/Banner";
import Socials from "@/components/Home/Socials";
import DigitalDemand from "@/components/services/DigitalDemand";
import OurServices from "@/components/services/OurServices";
import WhenWeStarted from "@/components/services/WhenWeStarted";
import Head from "next/head";
import BannerImg from "../../public/images/service_banner.webp";

const page = () => {
  return (
    <div>
      <Head>
        <title>Design Henge Services</title>
        <meta
          name="description"
          content="Branding & Identity . Website Design & Development . Digital Marketing . Mobile App Development . Custom 2D/3D Animation . eCommerce Experiences . Web3 Experience Design"
        />
      </Head>
      <div className="home_main">
        <Navbar />
        <Banner
          stempt={false}
          heading="WORLD CLASS"
          second="SOLUTION"
          third=""
          h2="For Business Across The Globe"
          text=" We strive to become an integral part of every organizations business promotion plan. We are committed to achieving our vision through a three-pronged strategy: Deliver, Create, Advance."
          img="https://res.cloudinary.com/diha3kofd/image/upload/v1711453170/design-henge/images/home/service_banner_ggykxj.webp"
          navigate=""
        />
      </div>
      <Socials />
      <DigitalDemand />
      <OurServices />
      <WhenWeStarted />
    </div>
  );
};

export default page;
