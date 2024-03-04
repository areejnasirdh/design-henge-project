import React from "react";
import Speakable from "../../../public/images/Speakable/speakable-logo.webp";
import OverviewSection from "../Layout/OverviewSection";

const Overview = () => {
  const services_list = [
    "Custom Graphics",
    "UX/UI Design",
    "Content Writing",
    "Market Research",
    "Competitor Analysis",

    // "Career Form Module",
    // "SEO Optimized",
    // "Web Hosting",
    "SSL Certificate",
    "QA and Testing",
    // "Website Optimization",
    "Event Integration",
    "Shop Module Integration",
    "Custom Calendar Module",
    "Lead Form Module",
    "Gallery Module",
  ];
  return (
    <OverviewSection logo={Speakable} services_list={services_list} client="Speakable" industry="Job Training and Employment">
      <h5>
        Speakable x Design Henge: Joint Forces to Empower Individuals with
        Seamless Job Training and Employment Opportunities through Tailored
        Solutions
      </h5>
      <p>
        Speakable collaborated with Design Hengel's team to advance their
        mission of amplifying the voices of individuals with disabilities.
        Speakable, known for advocating for those facing adversity, sought to
        enhance their digital presence by enlisting Design Henge Interactive's
        expertise specifically for UI design.
      </p>
      <p>
        As Speakable's chosen UI design partner, Design Henge Interactive
        provided tailored solutions to improve user experience and accessibility
        on their platform, reinforcing Speakable's commitment to advocacy and
        empowerment. The partnership between Speakable and Design Henge
        exemplifies the transformative power of UI design.
      </p>
    </OverviewSection>
  );
};

export default Overview;
