import React from "react";
import booklover from "../../../public/images/Zego/logo.webp";
import OverviewSection from "../Layout/OverviewSection";

const Overview = () => {
  const services_list = [
    "Custom Graphics",
    "UX/UI Design",
    "Custom Development",
    // "Career Form Module",
    "SEO Optimized",
    // "Web Hosting",
    "SSL Certificate",
    "Website Optimization",
    "QA and Testing",
    "Market research",
    "Competitor Analysis",
    // "Event Integration",
    // "Shop Module Integration",
    // "Custom Calendar Module",
    "Lead Form Module",
    // "Gallery Module",
  ];
  return (
    <OverviewSection logo={booklover} services_list={services_list} CLIENT="ZEGO" industry="AI Automation" >
      <h5>
        Design Henge collaborates with ZEGO, an AI company, crafting its logo
        and UI to propel automation, AI implementation, and outsourced team
        optimization.
      </h5>
      <p>
        Design Henge crafted a logo embodying ZEGO's futuristic vision,
        featuring sleek, geometric elements symbolizing efficiency and
        innovation, alongside bold typography conveying confidence. Leveraging
        ZEGO's core values, a cohesive brand identity resonating with the
        audience was developed, emphasizing innovation and efficiency.
      </p>
      <p>
        The user interface design prioritized simplicity and clarity, aiding in
        the comprehension of complex AI concepts. Through iterative feedback
        loops, Design Henge ensured alignment with ZEGO's objectives, resulting
        in a user-friendly platform facilitating seamless interaction and
        engagement with ZEGO's innovative solutions.
      </p>
    </OverviewSection>
  );
};

export default Overview;
