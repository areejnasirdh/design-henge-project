import React from "react";
import Navbar from "@/components/Common/Navbar/Navbar";
import Socials from "@/components/Home/Socials";
import Head from "next/head";
import Banner from "@/components/Common/Banner/Banner";
import BannerImg from "@/public/images/caseStudy/caseStudyBanner.png";
import CaseStudy from "@/components/Home/CaseStudy";

const page = () => {

  const cases =[
    {
      image: "/images/caseStudy/Case-study-section-2.webp",
      heading: "Speakable",
      description:
        "Design Henge, collaborated with Speakable, a language learning platform, to overhaul its user interface (UI) design for their dashboards. By combining our expertise in visual communication with Speakable's innovative language learning approach, the partnership aimed to create an intuitive and engaging user experience.",
      link: "/case-study/Speakable",
    },
    {
      image: "/images/caseStudy/Case-study-section-3.webp",
      heading: "Orange County Eating Disorder",
      description:
        "A successful collaboration between Orange County Eating Disorder & Design Henge, to develop website, logo design, and create engaging blog content to enhance the providers online presence. The key was to address the challenge of raising awareness about eating disorders while providing valuable resources to those in need, the client sought our expertise.",
      link: "/case-study/orange-county",
    },
    {
      image: "/images/caseStudy/case-study-section-6.webp",
      heading: "Zego",
      description:
        "ZEGO is an emerging AI company focused on empowering clients to identify opportunities for increased efficiencies through automation, AI integration, and leveraging outsourced teams. With a commitment to innovation and optimization, ZEGO aims to revolutionize business operations across various industries.",
      link: "/case-study/Zego",
    },
    {
      image: "/images/caseStudy/Case-study-section-4.webp",
      heading: "Dream Shot",
      description:
        "A dynamic commercial photo studio based in a bustling metropolitan area, renowned for its innovative approach to photography. Unlike traditional studios, DreamShot specializes in capturing unique moments with a twist, blending creativity with professionalism to deliver exceptional results but needed an online presence to put out there services.",
      link: "/case-study/DreamShot",
    },
    {
      image: "/images/caseStudy/Case-study-section-5.webp",
      heading: "Book Lover",
      description:
        "A burgeoning brand dedicated to celebrating the love of literature through curated merchandise. From mugs and t-shirts to wine glasses, each product with meaningful quotes, sourced from beloved books. They reached out to Design Henge to help them establish their brand from scratch.",
      link: "/case-study/BookLover",
    },
    {
      image: "/images/caseStudy/case-study-section-7.webp",
      heading: "POWER ATM LLC",
      description:
        "Power ATM LLC recognized the importance of a cohesive visual presence across all touchpoints. Looking to enhance their professionalism, reach and market visibility, they enlisted the expertise of Design Henge.",
      link: "/case-study/Power_atm",
    },
    {
      image: "/images/caseStudy/case-study-section-8.webp",
      heading: "Victek",
      description:
        "A Montreal based cutting-edge technology firm specializing in innovative solutions for businesses needed a branding revamp. While collaborating with Design Henge the focus was to provide a full-suite of services that reflected their legacy.",
      link: "/case-study/Victek",
    },
  ];
  return (
    <div>
      <Head>
        <title>Case Studies: Tangible results, driven with strategy</title>
        <meta
          name="description"
          content="Meta descrip: See our professional work. Check our portfolio and read the case studies for some of our custom solutions for startups and enterprise clients."
        />
      </Head>
      <div className="home_main">
        <Navbar />
        <Banner
          stempt={false}
          heading="READ OUR"
          second="CASE STUDIES"
          third=""
          h2=""
          text=" Discover the impact of our multidisciplinary experts' fusion,
          driving meaningful engagement through their combined expertise.
          Experience the synergy that transforms ideas into impactful
          realities."
          img={BannerImg}
          navigate=""
        />
      </div>
      <Socials />
      <CaseStudy data={cases}/>
    </div>
  );
};

export default page;
