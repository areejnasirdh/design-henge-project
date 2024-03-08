import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProjectImg from "../../public/images/projects-img2.png";

const Projects = () => {
  return (
    <div className="about_projects_main">
      <Container fluid className="container-width-2">
        <Row className="mt-3 justify-center items-center">
          <Col xl={6} lg={12}>
            <Row className="gx-0 mb-4 pb-2">
              <Col>
                <h3>10+</h3>
              </Col>
              <Col md={8}>
                <h6>YEARS OF EXPERIENCE</h6>
                <p>
                Our team brings decades of technical and creative leadership. Established in 2014, Design Henge has evolved and triumphed through the seasons.
                </p>
              </Col>
            </Row>
            <Row className="gx-0 mb-4 pb-2">
              <Col>
                <h3>5000+</h3>
              </Col>
              <Col md={8}>
                <h6>WORKING HOURS WERE SPENT</h6>
                <p>
                Boasting decades of technical and creative leadership, the team has dedicated over 5000 working hours to delivering exceptional results.
                </p>
              </Col>
            </Row>
            <Row className="gx-0 mb-4 pb-2">
              <Col>
                <h3>1000+</h3>
              </Col>
              <Col md={8}>
                <h6>SUCCEEDED PROJECTS</h6>
                <p>
                With a portfolio boasting over 1000 successfully completed projects, our track record speaks for itself in delivering exceptional results.
                </p>
              </Col>
            </Row>
            <Row className="gx-0 mb-4 pb-2">
              <Col>
                <h3>100+</h3>
              </Col>
              <Col md={8}>
                <h6>SATISFIED CLIENTS</h6>
                <p>
                Having garnered the satisfaction of over 100 clients, our commitment to excellence shines through in every project we undertake
                </p>
              </Col>
            </Row>
          </Col>
          <Col xl={5} className="d-flex justify-content-center">
            <Image src={ProjectImg}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
