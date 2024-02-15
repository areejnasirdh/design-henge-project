import Image from 'next/image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AboutImg2 from "../../public/images/about-img-2.png";


const WhoWeAre = () => {
  return (
    <div className="who_we_are_main">
      <div className="d-flex flex-column align-items-center pt-4">
        <h4>WHO WE ARE</h4>
        
      </div>
      <div className="who_we_are_details mt-2 pb-5">
        <Container fluid className="container-width">
          <Row className='justify-around'>
            <Col md={6} lg={7}>
              <Image src={AboutImg2} />
            </Col>
            <Col md={6} lg={4} className="lg:pt-md-5 lg:px-4 md:px-2 px-0 content">
              <h6>
                We At Qreate Are A Team Of Enthusiasts Who Love To Ideate And
                Create For You.
              </h6>
              <p className='mt-3'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit
                diam ullamcorper urna sit quisque tincidunt hendrerit mattis.
                Dictum lectus magnis phasellus dictumst eu, enim, at id non.
                Metus diam quis interdum morbi mi velit commodo, malesuada.
                Velit lacinia donec aliquam nunc volutpat.
              </p>
              <div className='mt-[50px]'>
                <h5>MISSION</h5>
                <p className='mt-3'>Design Henge's mission is to provide the endless opportunities with a pinch of innovation, a twist of creativity and a dash of passion.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default WhoWeAre