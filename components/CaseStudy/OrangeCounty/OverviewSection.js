import React from "react";
import orangeCounty from "../../../public/images/orangeCounty/orange-county-logo.png";
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
      We provide eating disorder treatment via online and in-person therapy. 
We provide therapy to adults and adolescents (14 years and older) of all body sizes, genders, sexual 
orientations, abilities, ethnicities, races, and religions. Our specialties include eating disorder treatment, 
online eating disorder therapy, eating disorder support, and treatment for anxiety, depression, and mood 
disorders which frequently co-occur with eating disorders. Contact us to schedule your free 15-minute phone 
consultation for eating disorder treatment, or online eating disorder therapy in California. 

      </h5>
      <p>
      We provide eating disorder treatment via online and in-person therapy. 
We provide therapy to adults and adolescents (14 years and older) of all body sizes, genders, sexual 
orientations, abilities, ethnicities, races, and religions. Our specialties include eating disorder treatment, 
online eating disorder therapy, eating disorder support, and treatment for anxiety, depression, and mood 
disorders which frequently co-occur with eating disorders. Contact us to schedule your free 15-minute phone 
consultation for eating disorder treatment, or online eating disorder therapy in California. 

      </p>
      <p>
      We provide eating disorder treatment via online and in-person therapy. 
We provide therapy to adults and adolescents (14 years and older) of all body sizes, genders, sexual 
orientations, abilities, ethnicities, races, and religions. Our specialties include eating disorder treatment, 
online eating disorder therapy, eating disorder support, and treatment for anxiety, depression, and mood 
disorders which frequently co-occur with eating disorders. Contact us to schedule your free 15-minute phone 
consultation for eating disorder treatment, or online eating disorder therapy in California. 

      </p>
    </OverviewSection>
  );
};

export default Overview;
