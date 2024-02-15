
import Image from "next/image";
import React from "react";
import { Container } from "react-bootstrap";
const HomePage = ({ img }) => {
  return (
    <div className="home_page_main">
      <Container fluid className="Home_container-width-2">
        <h2 className="stroke text-white text-center pb-2">
          HOME PAGES
        </h2>
        <Image src={img} />
      </Container>
    </div>
  );
};

export default HomePage;
