import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const DigitalDemand = () => {
  return (
    <div className="mt-3 digital_demand_main">
      <Container fluid className="container-width-2">
        <h2 className="blueSubHeading">
          Digital demand thrives in our hands
        </h2>
        <div className="flex space-x-3 items-center justify-center">
          <div className="border-t-4 border-red-primary w-7"></div>
          <p className="font-medium text-[15px]">
            DISCOVERY . DESIGN . DEVELOPMENT . TESTING
          </p>
        </div>
        <Row className="pt-5">
          <Col md={3}>
            <div className="status_box">
              <h3 className="stroke4">23 %</h3>
              <h6>INCREASED RESPONSE TIME</h6>
            </div>
          </Col>
          <Col md={3}>
            <div className="status_box">
              <h3 className="stroke4">88 %</h3>
              <h6>FASTER DELIVERY TIME</h6>
            </div>
          </Col>
          <Col md={3}>
            <div className="status_box">
              <h3 className="stroke4">97 %</h3>
              <h6>CLIENT SATISFACTION INDEX</h6>
            </div>
          </Col>
          <Col md={3}>
            <div className="status_box">
              <h3 className="stroke4">80 %</h3>
              <h6>CLIENT RETENTION RATE</h6>
            </div>
          </Col>
        </Row>
        <Row className="align-items-center solutions_provide my-4">
          <Col md={6}>
            <Row>
              <Col md={12}>
                <h1 className="blackGrayHeading">SOLUTION WE PROVIDE</h1>
              </Col>
            </Row>
          </Col>
          <Col md={6} className="mt-3 md:mt-0">
            <p>
              With every single one of our clients we bring forth a deep passion
              for creative problem solving innovations forward thinking brands
              boundaries
              With every single one of our clients we bring forth a deep passion
              for creative problem solving innovations forward thinking brands
              boundaries
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DigitalDemand;
