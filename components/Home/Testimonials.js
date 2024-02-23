"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Testimonial from "./Testimonial";
import { CustomNextArrow, CustomPrevArrow } from "./CustomSliderArrows";
import { Container } from "react-bootstrap";

const settings = {
  dots: false,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  // lazyLoad: true,
  prevArrow: <CustomPrevArrow />,
  nextArrow: <CustomNextArrow />,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        autoplay: true,
        arrows: false,
        dots: false,
      },
    },
  ],
};

const testimonials = [
  {
    testimonial:
      "Working with Design Henge was an absolute pleasure. Their team's web design and development expertise resulted in a stunning website that perfectly represents our brand. Highly recommended!",
    name: "Emily Johnson",
    position: "CEO of Stellar Solutions",
  },
  {
    testimonial:
      "Working with Design Henge was an absolute pleasure. Their team's web design and development expertise resulted in a stunning website that perfectly represents our brand. Highly recommended!",
    name: "David Miller",
    position: "Marketing Manager at Fusion Tech",
  },
  {
    testimonial:
      "Design Henge's SEO services have been a game-changer for our online presence. They helped us rank higher in search results and attract more organic traffic. Thanks, Design Henge!",
    name: "Samantha Collins",
    position: "Director of Marketing at BrightSpark Co.",
  },
];

function Testimonials() {
  return (
    <div className="testimonials py-[100px]">
      <Container fluid className="max-w-[1200px]">

      <div className="relative overflow-hidden flex flex-col justify-center  mx-auto max-w-[90rem] space-y-3 ">
        {/* <div className=" flex flex-col text-center">
          <h1 className="lg:col-start-3 lg:col-end-5 whitespace-nowrap font-bebas text-6xl lg:text-7xl xl:text-[5rem] 2xl:text-8xl font-outline-white-1 text-blue-primary stroke1">
            WHAT THEY SAY
          </h1>

          <div className="flex justify-center items-center ">
            <div className="border-t-4 border-red-primary w-5 lg:w-10"></div>
            <p className="font-light text-[14px]">
              A variety of creative capabilities under one roof
            </p>
          </div>
        </div> */}

        <div className="testimonial_slider mt-7 ">
          <Slider {...settings}>
            {testimonials.map(({ testimonial, name, position }, idx) => (
              <>
                <Testimonial
                  key={idx}
                  testimonial={testimonial}
                  name={name}
                  position={position}
                />
              </>
            ))}
          </Slider>
        </div>
      </div>
      </Container>

    </div>
  );
}

export default Testimonials;
