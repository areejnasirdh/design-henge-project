import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const DesignTheme = ({ Logo, Color, text, Font }) => {
  return (
    <div className="yummy_girlo_main">
      <Container fluid className="container-width-2">
        <Row className="py-3 gx-2">
          <Col md={4} className="d-flex align-items-center">
            <h3 className="stroke4">THE LOGO</h3>
          </Col>
          <Col md={6}>
            <Image src={Logo} height={140} />
          </Col>
        </Row>
        <Row className="py-3 gx-2">
          <Col md={4}>
            <h3 className="stroke4">
              COLOR <br />
              Pellete
            </h3>
          </Col>
          <Col md={8}>
            <Image src={Color} />
          </Col>
        </Row>
        <Row className="py-3 gx-2">
          <Col md={4}>
            <h3 className="stroke4">TYPOGRAPHY.</h3>
            <p>{text}</p>
          </Col>
          <Col md={8}>
            <Image src={Font} className="mt-4" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DesignTheme;
