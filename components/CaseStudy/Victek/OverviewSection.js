import React from "react";
import vicket from "../../../public/images/vickek/logo.png";
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
        Vic-Tek empowers people with disabilities and other barriers
        through job training and employment at Vic-Tek and in the
        community.
      </h5>
      <p>
        Design Henge Interactive worked with Goodwill’s team to help them in their mission of continuing to amplify the voice of individuals with disabilities, providing independence and access for all. Speakable is known for being an advocate and defender of those who are going through difficult times.

      </p>
      <p>
        To further their objectives, Speakable hired Design Henge Interactive to support their business with web design expertise and occasional consulting related to digital marketing services. As the web design agency of Speakable’s choice, ongoing web support and maintenance, as well as on-page SEO and management of their $10,000 monthly Google Ads Grant, was managed by the Design henge team.
      </p>
    </OverviewSection>
  );
};

export default Overview;
