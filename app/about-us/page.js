import React from "react";
import Navbar from "@/components/Common/Navbar/Navbar";
import Acheivements from "@/components/About/Acheivements";
import Projects from "@/components/About/Projects";
import Socials from "@/components/Home/Socials";
import Head from "next/head";
import Banner from "@/components/Common/Banner/Banner";
import BannerImg from "../../public/images/about-banner.png";
import HomeAbout from "@/components/Home/HomeAbout";
import AboutImg2 from "../../public/images/about-img-2.png";

const page = () => {
  return (
    <div>
      <Head>
        <title>About Us</title>
        <meta
          name="description"
          content="Meta descrip: Design Henge aims to help startups and organizations recognize their potential and leverage optimum, highly customized solutions for business growth and ROI."
        />
      </Head>
      <div className="home_main about-us">
        <Navbar />
        <Banner
          stempt={false}
          heading="Strategic Thinkers."
          second="Digital Innovators."
          third="Growth Catalysts."
          text="At Design Henge's inception, we realized success hinged on genuinely listening to people, including target audiences, partners, and team members."
          img={BannerImg}
          navigate="/about-us#who_we_are_main"
        />
      </div>
      <Socials />
      <HomeAbout
        subHeading="WHO WE ARE"
        bluePara=" The Team at Design Henge Prides Itself As The Frontrunners Of Innovation, Creativity And Growth!"
        para=" From our humble beginnings our agency has grown to serve thousands of global companies. With active clients spanning Canada, UK, Australia, New Zealand and the United States, we've become a trusted partner for businesses of all sizes and industries."
        mission="Our mission is to prioritize a strategy-first approach to deliver tangible results. Our team is dedicated to not only generating new business but also long-term success."
        vision={false}
        img={AboutImg2}
      />
      <Acheivements />
      <Projects />
    </div>
  );
};

export default page;
