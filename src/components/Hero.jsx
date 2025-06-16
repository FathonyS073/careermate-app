import React from "react";
import Bg from "../assets/Images/Bg-Section.jpg";

const BgStyle = {
  backgroundImage: `url(${Bg})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "100%",
};
const Hero = () => {
  return (
    <div>
      <div className="bg-cover h-[300px] md:h-[633px]" style={BgStyle}></div>
    </div>
  );
};

export default Hero;
