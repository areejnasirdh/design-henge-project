import Image from "next/image";
import React from "react";
import { Container } from "react-bootstrap";
const Businesscard = ({ img }) => {
  return (
    <div className="home_page_main">
      <Container fluid className="Home_container-width-2">
        <h2 className="stroke text-white text-center pb-2 pt-[60px]">
          Business Card
        </h2>
        <Image src={img} className="pb-[140px] pt-[60px]" />
      </Container>
    </div>
  );
};

export default Businesscard;
