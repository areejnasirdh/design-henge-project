import React from "react";
import orangeCounty from "../../../public/images/orangeCounty/orange-county-logo.webp";
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
    <OverviewSection logo={orangeCounty} services_list={services_list}>
      <h5>
        Orange County Eating Disorder Therapist Group x Design Henge: A Synergy
        in Eating Disorder Content Management that Enhanced Engagement
      </h5>
      <p>
        Tasked with raising awareness about eating disorders and providing vital
        support, the client sought Design Henge's expertise to develop a
        website, design a logo, and create engaging blog content.
      </p>
      <p>
        Tasked with raising awareness about eating disorders and providing
        support, Design Henge developed a website, logo, and engaging blog
        content. The blog posts, blending clinical knowledge with creative
        storytelling, resonated with audiences, offering insights and
        encouragement.
      </p>
      <p>
        The website, user-friendly and responsive, provided educational
        resources and support avenues. The logo, symbolizing hope and
        resilience, visually represented the cause. As a result, increased
        website traffic and engagement were observed.
      </p>
    </OverviewSection>
  );
};

export default Overview;
