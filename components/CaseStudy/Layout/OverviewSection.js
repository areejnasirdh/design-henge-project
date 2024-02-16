"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const OverviewSection = ({ logo, services_list, children }) => {
  const pathname = usePathname();
  console.log(pathname.split("/"));
  const isOrangeCountyPage = pathname.split("/").includes("orange-county");
  return (
    <div className="case_study_overview">
      <div className="overview_main">
        <Container fluid className="container-width-2">
          <Row className="py-3 gx-2">
            <Col md={4}>
              <h3 className="stroke3">OVERVIEW</h3>
            </Col>
            <Col md={8}>
              <Image src={logo} height={120} />
            </Col>
          </Row>
        </Container>
      </div>
      <div
        className={
          isOrangeCountyPage ? "overview_details_orange" : "overview_details"
        }
      >
        <Container fluid className="container-width-2">
          <Row className="gx-2">
            <Col md={4}>
              <div className="pb-3">
                <h6>Client</h6>
                <p>Speakable</p>
              </div>
              <div className="pb-3">
                <h6>Industry</h6>
                <p>Auto-graded speaking activities</p>
              </div>
              <div>
                <h6>Services We Provided</h6>
                <ul>
                  {services_list.map((service, i) => (
                    <li key={i}>{service}</li>
                  ))}
                </ul>
              </div>
            </Col>
            <Col md={8} className="d-flex flex-col gap-y-5">
              {children}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default OverviewSection;
