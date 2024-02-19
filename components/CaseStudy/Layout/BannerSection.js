
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const BannerSection = ({ bannerClass, children }) => {
  return (
    <div className={`case_study_banner_main ${bannerClass}`}>
      <Container fluid className="container-width-2">
        <Row>
          <Col md={7}>{children}</Col>
        </Row>
      </Container>
    </div>
  );
};

export default BannerSection;
