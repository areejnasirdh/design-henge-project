import React from "react";
import Navbar from "@/components/Common/Navbar/Navbar";
import Banner from "@/components/services/Banner";
import Socials from "@/components/Home/Socials";
import DigitalDemand from "@/components/services/DigitalDemand";
import OurServices from "@/components/services/OurServices";
import WhenWeStarted from "@/components/services/WhenWeStarted";
import Head from "next/head";

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
        <Banner />
      </div>
      <Socials />
      <DigitalDemand />
      <OurServices />
      <WhenWeStarted />
    </div>
  );
};

export default page;
