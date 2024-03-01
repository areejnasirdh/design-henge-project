import React from "react";
import Started from "../../../public/images/yummygurlo/started-img.webp";
import WhereItStartedSection from "../Layout/WhereItStartedSection";

const WhereItStarted = () => {
  return (
    <WhereItStartedSection
      Img={Started}
      heading="THE OUTCOME"
      text="Following the implementation of Design Henge's branding solutions, Yumme Girl Skin O experienced market visibility and consumer engagement. The cohesive brand identity resonated with consumers, leading to increased brand recognition. "
    />
    // <div className="where_it_started_main">
    //   <Container fluid className="container-width-2">
    //     <Row className="justify-content-center">
    //       <Col md={10} className="d-flex flex-col items-center">
    //         <div className="where_it_started_img_container">
    //           <Image src={Started} className="absolute bottom-0 w-full" />
    //         </div>
    //         <h1 className="stroke">WHERE IT ALL STARTED...</h1>
    //         <p className="text-white text-center">
    //           After discussing business goals and objectives, we crafted mock
    //           ups and wireframes for different website sections. Each section
    //           had to achieve a specific business goal. This early planning is
    //           always an essential step, enabling a rapid and meaningful return
    //           on investment once the website launches. An intuitive and
    //           convenient user experience is a must for any website development
    //           project.
    //         </p>
    //       </Col>
    //     </Row>
    //   </Container>
    // </div>
  );
};

export default WhereItStarted;
