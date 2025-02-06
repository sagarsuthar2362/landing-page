import React from "react";
import { Carousel } from "react-responsive-carousel";
import img1 from "../assets/3.jpg";
import img2 from "../assets/4.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Services = () => {
  return (
    <div>
      <Carousel
       infiniteLoop={true}
       autoPlay={true}
       showArrows={false}
      showThumbs={false}

      showStatus={false}
      transitionTime={1000}
      >
        <div>
          <img src={img1} alt="" />
          <p className="legend">MERN stack</p>
        </div>

        <div>
          <img src={img2} alt="" />
          <p className="legend"> MEAN stack</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Services;
