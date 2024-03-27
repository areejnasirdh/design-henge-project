import Image from "next/image";
import React from "react";
import { Container } from "react-bootstrap";
const SocialMediaDesign = ({ img }) => {
  return (
    <div className="social_media_main">
      <Container fluid className="container-width-2">
        <h2 className="text-center py-5 blueGrayHeading">SOCIAL MEDIA POST</h2>
        <div className="flex justify-center">
          <Image src={img} width={800} height={100} />
        </div>
      </Container>
    </div>
  );
};

export default SocialMediaDesign;
