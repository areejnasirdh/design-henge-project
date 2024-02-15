"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Service1 from "../../public/images/services/web-development.png";
import Service2 from "../../public/images/services/logo-design.png";

const OurServices = () => {
  const [selected, setSelected] = useState(0);

  const services = [
    {
      image: Service1,
      heading: "Web Development",
      desc: "Web development is the work involved in developing",
    },
    {
      image: Service2,
      heading: "Digital Marketing",
      desc: "Web development is the work involved in developing",
    },
    {
      image: Service1,
      heading: "Branding & Illustration",
      desc: "Web development is the work involved in developing",
    },
    {
      image: Service1,
      heading: "App Development",
      desc: "Web development is the work involved in developing",
    },
    {
      image: Service1,
      heading: "Solution Trainings",
      desc: "Web development is the work involved in developing",
    },
    {
      image: Service1,
      heading: "Seo & Optimization",
      desc: "Web development is the work involved in developing",
    },
  ];
  return (
    <div className="our_services_main">
      <Container fluid className="container-width-2">
        <Row className="align-items-center">
          <Col md={5}>
            <Image src={services[selected].image} />
          </Col>
          <Col md={7}>
            {services.map((s,i) => (
              <div className="services" onClick={()=>setSelected(i)}>
                <Row className="items-center">
                  <Col md={5} className="d-flex gap-4 ">
                    <h4>0{i+1}</h4>
                    <h4>{s.heading}</h4>
                  </Col>
                  <Col md={7}>
                    <p>{s.desc}</p>
                  </Col>
                </Row>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OurServices;
