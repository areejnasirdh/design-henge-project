import React from "react";
import orangeCounty from "../../../public/images/Dreamshot/logo.webp";
import OverviewSection from "../Layout/OverviewSection";

const Overview = () => {
  const services_list = [
    "Custom Graphics",
    "UX/UI Design",
    "Custom WordPress Development",
    // "Career Form Module",
    "SEO Optimized",
    "Web Hosting",
    "SSL Certificate",
    "Website Optimization",
    // "Event Integration",
    // "Shop Module Integration",
    "Custom Calendar Module",
    "Lead Form Module",
    "Gallery Module",

    "Blog Writing",
    "Market Research",
    "Website Content",
    "Competitor Analysis",
  ];
  return (
    <OverviewSection logo={orangeCounty} services_list={services_list} client="Dream Shot" industry="Online Photo Studio">
      <h5>
        Dreamshot engaged Design Henge for a captivating website resonating with
        their audience, leveraging cutting-edge UI/UX design and development
        expertise.
      </h5>
      <p>
        Design Henge meticulously crafted DreamShot's digital presence through a
        comprehensive approach. By dissecting and understanding DreamShot's
        ethos, audience, and market dynamics, a strategic blueprint was forged.
        Leveraging DreamShot's distinctiveness, Design Henge conceptualized a
        visually captivating design imbued with creativity and professionalism.
      </p>
      <p>
        User-centricity remained paramount, reflected in intuitive navigation
        and clear calls-to-action. Interactive elements like sliders and
        parallax effects were deftly woven in, enhancing engagement. Ensuring
        universal accessibility, the website was developed responsively,
        guaranteeing a seamless user experience across diverse devices.
      </p>
    </OverviewSection>
  );
};

export default Overview;
