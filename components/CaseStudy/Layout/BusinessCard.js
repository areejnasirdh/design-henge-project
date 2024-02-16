import Image from "next/image";
import React from "react";
import { Container } from "react-bootstrap";
const Businesscard = ({ img }) => {
  return (
    <div className="home_page_main">
      <Container fluid className="Home_container-width-2">
        <h2 className="text-center pb-2 pt-[60px]">
          BUSINESS CARD
        </h2>
        <div className="w-full flex justify-center md:px-2 lg:px-[60px] ">
          <Image src={img} className="pb-[140px] pt-[60px]" />
        </div>
      </Container>
    </div>
  );
};

export default Businesscard;
