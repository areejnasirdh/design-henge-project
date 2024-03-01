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

export default function Home() {
  // useEffect(() => {
  //   AOS.init({
  //     easing: "ease-out-cubic",
  //     once: true,
  //     offset: 50,
  //   });
  // }, []);
  // useLayoutEffect(()=>{
  //   window.scroll({
  //     top: 0,
  //     left: 0,
  //     behavior: 'smooth'
  //   });

  // },[])
  // useEffect(() => {
  // }, []);
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
      <HomeAbout />
      <Services />
      <Process />
      <Clients />
      <CaseStudy />
      <Blog />
    </div>
  );
}
