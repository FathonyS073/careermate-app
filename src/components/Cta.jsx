import React from "react";
import CtaImage from "../assets/Images/Cta.png";

const Cta = () => {
  return (
    <div className="container py-16 flex items-center justify-center">
      <img src={CtaImage} alt="" className="w-screen h-[250px]" />
      <div className="absolute flex items-center justify-center text-center flex-col gap-4">
        <h1 className="text-[30px] md:text-[30px] text-white font-semibold w-2/3">
          Your Dream Career Starts Here. Discover, Connect, and Grow with
          CareerMate Today!
        </h1>
        <div className="btn cursor-pointer bg-white text-title font-medium flex items-center justify-center w-[250px] h-[50px] text-[16px] md:text-[18px] gap-4 rounded-full">
          Start Your Journey !
        </div>
      </div>
    </div>
  );
};

export default Cta;
