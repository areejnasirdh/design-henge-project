import React, { Component } from "react";
import Slider from "react-slick";
// import './HomeSlider.css';

const SliderContent = [
  {
    icon: "/images/service-logo-designing.png",
    title: "LOGO DESIGNING",
    subtext: "Creatively appealing and attention grabbing designs that captivate everyone."
  },
  {
    icon: "/images/service-branding.png",
    title: "Development",
    subtext: "Coding application for tailored solutions with a multidisciplinary approach."
  },
  {
    icon: "/images/service-branding.png",
    title: "Mobile Apps",
    subtext: "Programming futuristic mobile apps that are compatible & optimized for usability."
  },
  {
    icon: "/images/service-designing.png",
    title: "Marketing",
    subtext: "Spreading the word out in the public to get our clients noticed by the right audience."
  }
];

function Card({icon, title, subtext}) {
  return (
    <div className="d-flex justify-center items-center">
    <div className="SliderCard">
      {/* <div className="Icon"> */}
        <img src={icon} alt="icon"/>
      {/* </div> */}
      <div >
        <h4>{title}</h4>
        <p>{subtext}</p>
      </div>
    </div>
    </div>
  );
}

export default class HomeSlider extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.currentSlide !== prevProps.currentSlide) {
      const currentSlideIndex = SliderContent.findIndex(slide => slide.title === this.props.currentSlide);
      if (currentSlideIndex !== -1) {
        this.slider.slickGoTo(currentSlideIndex, true);
      }
    }
  }

  handleSlideChange = (currentSlide) => {
    const { title } = SliderContent[currentSlide];
    this.props.onSlideChange(title);
  };

  render() {
    var settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '0px',
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 780,
          settings: {
            slidesToShow: 1,
            dots: false
          }
        }
      ]
    };
    return (
      <div
        className="HomeSlider"
      >

      <Slider
        {...settings}
        afterChange={this.handleSlideChange}
        ref={(slider) => (this.slider = slider)}
        >
        {SliderContent.map((slider) => (
          <Card key={slider.title} icon={slider.icon} title={slider.title} subtext={slider.subtext} />
        ))}
      </Slider>
          </div>
    );
  }
}