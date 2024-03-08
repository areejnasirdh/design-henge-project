// "use client";
// import styles from './page.module.css'
import Navbar from "@/components/Common/Navbar/Navbar";
import BannerSection from "@/components/Home/BannerSection";
import Socials from "@/components/Home/Socials";
import HomeAbout from "@/components/Home/HomeAbout";
import Process from "@/components/Home/Process";
// import { useEffect, useLayoutEffect } from "react";
// import { Router } from "next/router";
import CaseStudy from "@/components/Home/CaseStudy";
import Blog from "@/components/Home/Blog";
import ContactUs from "@/components/Home/ContactUs";
import Footer from "@/components/Home/Footer";
import Services from "@/components/Home/Services";
import Testimonials from "@/components/Home/Testimonials";
import Clients from "@/components/Home/Clients";
import AOS from "aos";
import Head from "next/head";
import AboutImg from "../public/images/home-about-1.png";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Design Henge: Propel your brands towards success</title>
        <meta
          name="description"
          content="Design Henge is a digital marketing and branding agency based in Illinois passionately creating impactful work for clients globally."
        />
      </Head>
      <div className="home_main">
        <Navbar />
        <BannerSection />
      </div>
      <Socials />
      <HomeAbout
        heading="ABOUT"
        subHeading="HELPING BRANDS ONLINE"
        bluePara="At Design Henge, we rise by helping others. This has helped us
                cater numerous clients across the globe and make our mark in the
                industry."
        para=" We helps brands create meaningful and personalized customer
                experiences for web, social and design in the field of
                information and technology. Our work shows the commitment we’ve
                shown over the years of mastering skills and working
                hand-in-hand with clients to maximize the investment in their
                online business efforts."
        mission=" Design Henge's mission is to provide the endless
        opportunities with a pinch of innovation, a twist of
        creativity and a dash of passion."
        vision={true}
        navigate="/about-us"
        img={AboutImg}
      />
      <Services />
      <Process />
      <Clients />
      <CaseStudy />
      <Blog />
    </div>
  );
}
