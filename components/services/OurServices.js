"use client";
import { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import Image1 from "../../public/images/services/branding-and-identity.webp";
import Image2 from "../../public/images/services/website-design-development.webp";
import Image3 from "../../public/images/services/web3-design.webp";
import Image4 from "../../public/images/services/ecommerce.webp";
import Image5 from "../../public/images/services/mobile-app-development.webp";
import Image6 from "../../public/images/services/digital-marketing.webp";
import Image7 from "../../public/images/services/2d-3d.gif";
import DefaultBg from "../../public/images/services-bg.png";
import { Col, Container, Row } from "react-bootstrap";

const OurServices = () => {

  const [selected, setSelected] = useState(0);
  const services = [
      {
          image: Image1,
          heading: "Branding & Identity",
      },
      {
          image: Image2,
          heading: "Website Design & Development",
      },
      {
          image: Image6,
          heading: "Digital Marketing",
      },
      {
          image: Image5,
          heading: "Mobile App Development",
      },
      {
          image: Image7,
          heading: "Custom 2D/3D Animation",
      },
      {
          image: Image4,
          heading: "eCommerce Experiences",
      },
      {
          image: Image3,
          heading: "Web3 Experience Design",
      },

  ];

  return<div className="our_services_main" style={{ backgroundImage: `url(${services[selected]?.image?.src})` }}>
      <Container fluid className="container-width-2">
          <Row className="align-items-center">
              <Col md={12} onMouseLeave={() => setSelected(0)}>
                  {services.map((s, i) => {
                      return <div className="services mt-2" key={i} onMouseEnter={() => setSelected(i)}>
                          <Row className="items-center">
                              <Col md={12} className="d-flex">
                                  <h4 className={`flex justify-between items-center`}>{s.heading}  <IoIosArrowRoundForward className="ml-4" /></h4>
                              </Col>
                          </Row>
                      </div>
                  }
                  )}
              </Col>
          </Row>
      </Container>
  </div>
};

export default OurServices;
