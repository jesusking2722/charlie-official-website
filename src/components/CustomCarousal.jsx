import React from "react";
import { Carousel } from "3d-react-carousal";

const CustomCarousal = ({ slides }) => {
  return <Carousel slides={slides} autoplay={true} interval={10000} />;
};

export default CustomCarousal;
