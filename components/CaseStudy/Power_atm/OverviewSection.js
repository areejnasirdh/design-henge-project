import React from "react";
import poweratm from "../../../public/images/power_atm/logo.webp";
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
    "Event Integration",
    "Shop Module Integration",
    // "Custom Calendar Module",
    // "Lead Form Module",
    // "Gallery Module",

    "Blog Writing",
    "Market Research",
    "Website Content",
    "Competitor Analysis",
  ];
  return (
    <OverviewSection logo={poweratm} services_list={services_list} client="Power Atm" industry="Multi-curency Atm">
      <h5>
        Transforming Brand Image: Design Henge Collaborates with Power ATM LLC
        to Create Compelling Visual Identity Across Platforms for Enhanced
        Market Impact
      </h5>
      <p>
        In partnership with Power ATM LLC, Design Henge presented a modern,
        unique and captivating logo redesign that reflected the company's
        commitment to excellence and innovation. Sleek and professional business
        cards were meticulously crafted to leave a lasting impression, ensuring
        brand consistency across all communication materials.
      </p>
      <p>
        Design Henge then developed a user-friendly website, showcasing Power
        ATM LLC's services and expertise, enhancing credibility and market
        visibility. Together, these efforts solidified Power ATM LLC's position
        as a trusted leader in the ATM industry.
      </p>
    </OverviewSection>
  );
};

export default Overview;
