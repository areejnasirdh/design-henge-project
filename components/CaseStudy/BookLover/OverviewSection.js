import React from "react";
import booklover from "../../../public/images/Booklover/Logo.webp";
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
    <OverviewSection logo={booklover} services_list={services_list}>
      <h5>
        Design Henge and The Book Lover collaborate to shape brand identity,
        product design, UI, and web development for a seamless digital
        experience.
      </h5>
      <p>
        Drawing inspiration from literature, Design Henge crafted a timeless
        logo for The Book Lover. Elegant typography evokes classic book covers,
        symbolizing storytelling's essence. Meticulously curated merchandise
        features iconic book quotes. Whimsical mugs and stylish t-shirts invite
        customers to embrace literature in daily life.
      </p>
      <p>
        We prioritized a user-friendly interface for the digital storefront,
        integrating clean layouts, intuitive navigation, and vibrant visuals.
        The web development team ensured smooth functionality and optimal
        performance, crafting a seamless shopping experience across devices for
        The Book Lover's platform.
      </p>
    </OverviewSection>
  );
};

export default Overview;
