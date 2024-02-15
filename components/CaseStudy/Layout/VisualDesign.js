
import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
const VisualDesign = ({img}) => {
  return (
    <div className="visual_website_design">
      <Container fluid className="container-width-2">
        <Row className="justify-content-center">
          <Col md={10}>
            <h1 className="stroke text-center">Visual Website Design</h1>
            <Image src={img} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};



export default VisualDesign