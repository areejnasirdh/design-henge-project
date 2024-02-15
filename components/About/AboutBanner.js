import React from "react";
import Banner from "@/components/Common/Banner/Banner";
import BannerImg from "../../public/images/about-banner.png";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";

//   return (
//     <div className="contact_banner_section_main">
//       <Container fluid className="container-width-2">
//         <Row>
//           <Col md={5} className="pt-5">
//             <h1>ABOUT US</h1>
//             <h1>OUR VISION</h1>
//             <p>
//               We strive to become an integral part of every organizations{" "}
//               business promotion plan. We are committed to achieving our vision
//               through a three-pronged strategy: Deliver, Create, Advance.
//             </p>
//           </Col>
//           <Col
//             md={7}
//             className="d-flex justify-content-center align-items-center"
//           >
//             {/* <div className="banner_img_box"> */}
//             <Image src={BannerImg} />
//             {/* </div> */}
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };
const AboutBanner = () => {
  return (
    <Banner
      heading="ABOUT US"
      subHeading="OUR VISION"
      text="We strive to become an integral part of every organizations business promotion plan. We are committed to achieving our vision through a three-pronged strategy: Deliver, Create, Advance."
      img={BannerImg}
    />
  );
};

export default AboutBanner;
