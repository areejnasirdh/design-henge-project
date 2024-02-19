import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProjectImg from "../../public/images/projects-img2.png";

const Projects = () => {
  return (
    <div className="about_projects_main">
      <Container fluid className="container-width-2">
        <Row className="mt-3 justify-center items-center">
          <Col xl={6} lg={5}>
            <Row className="gx-0 mb-4 pb-2">
              <Col>
                <h3>1000+</h3>
              </Col>
              <Col md={8}>
                <h6>SUCCEEDED PROJECTS</h6>
                <p>
                  The Radiant team has decades of technical and creative
                  leadership. Radiant was founded in 2009 and has evolved and
                  triumphed throughout the seasons.
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
                  The Radiant team has decades of technical and creative
                  leadership. Radiant was founded in 2009 and has evolved and
                  triumphed throughout the seasons.
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
                  The Radiant team has decades of technical and creative
                  leadership. Radiant was founded in 2009 and has evolved and
                  triumphed throughout the seasons.
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
                  The Radiant team has decades of technical and creative
                  leadership. Radiant was founded in 2009 and has evolved and
                  triumphed throughout the seasons.
                </p>
              </Col>
            </Row>
          </Col>
          <Col xl={5} lg={7} className="d-flex justify-content-center">
            <Image src={ProjectImg}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
