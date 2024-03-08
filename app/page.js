import Navbar from "@/components/Common/Navbar/Navbar";
import Banner from "@/components/Common/Banner/Banner";
import BannerImg from "../public/images/home_banner.png";
import Socials from "@/components/Home/Socials";
import HomeAbout from "@/components/Home/HomeAbout";
import AboutImg from "../public/images/home-about-1.png";
import Process from "@/components/Home/Process";
import CaseStudy from "@/components/Home/CaseStudy";
import Blog from "@/components/Home/Blog";
import Services from "@/components/Home/Services";
import Clients from "@/components/Home/Clients";
import Head from "next/head";

export default function Home() {
  const cases = [
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
  ];
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
        <Banner
          stempt={true}
          heading="Boosting Business."
          second="Empowering Brands."
          third="Crafting Experiences."
          text="We're a digital marketing and branding agency based in Illinois, passionately creating impactful work with a focus on our clients and their success."
          img={BannerImg}
          navigate="/services"
        />
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
      <CaseStudy data={cases} heading="CASE STUDY" />
      <Blog />
    </div>
  );
}
