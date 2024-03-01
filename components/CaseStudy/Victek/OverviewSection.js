import React from "react";
import vicket from "../../../public/images/vickek/logo.webp";
import OverviewSection from "../Layout/OverviewSection";

const Overview = () => {
  const services_list = [
    "Custom Graphics",
    "UX/UI Design",
    "Custom WordPress Development",
    "Career Form Module",
    "SEO Optimized",
    "Web Hosting",
    "SSL Certificate",
    "Website Optimization",
    "Event Integration",
    "Shop Module Integration",
    "Custom Calendar Module",
    "Lead Form Module",
    "Gallery Module",
  ];
  return (
    <OverviewSection logo={vicket} services_list={services_list}>
      <h5>
        VIC-TEK x Design Henge: Revitalizing Branding to Reflect Modernization.
        Creativity and Strategic Repositioning for Professional Excellence,
        Growth and Market Success
      </h5>
      <p>
        Design Henge played a pivotal role in VIC-TEK's comprehensive brand
        overhaul, seamlessly blending creativity with strategic expertise across
        various fronts. From crafting a contemporary logo rooted in the
        company's heritage to developing cohesive template designs and a
        user-friendly website interface, each element was meticulously tailored
        to reflect VIC-TEK's professionalism and commitment to excellence.
      </p>
      <p>
        The incorporation of visually compelling social media posts and
        effective SEO optimization further amplified VIC-TEK's online presence,
        driving engagement and bolstering brand visibility in the digital
        landscape.
      </p>
    </OverviewSection>
  );
};

export default Overview;
