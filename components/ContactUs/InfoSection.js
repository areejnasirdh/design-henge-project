import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const ContactDemand = () => {
  return (
    <div className="py-4">
      <Container fluid className="container-width-2">
        <Row className="pt-5">
          {/* <Col> */}
          {/* <div className="flex flex-row sm:flex-col"> */}
          <Col md={4}>
            <div className=" p-5 border-2 border-black-500  contact-info h-full">
              <h3>Phone Number</h3>
              <h6>+569 (58) 3259-3256</h6>
              <h6>+569 (58) 3259-3256</h6>
            </div>
          </Col>
          <Col md={4}>
            <div className=" p-5 border-2 border-black-500 contact-info h-full">
              <h3>Email Address</h3>
              <h6>info@tronix.com</h6>
              <h6>inside.24tronix.com</h6>
            </div>
          </Col>
          <Col md={4}>
            <div className=" p-5 border-2 border-black-500 contact-info h-full">
              <h3>Office Address</h3>
              <h6>25 Hilton Street, Miana</h6>
              <h6> Frankfurt. DE</h6>
            </div>
          </Col>
          {/* </div> */}
          {/* </Col> */}
        </Row>
      </Container>
    </div>
  );
};

export default ContactDemand;
