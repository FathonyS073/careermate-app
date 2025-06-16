import React from "react";
import Bg from "../assets/Images/Bg.png";
import { RxDoubleArrowRight } from "react-icons/rx";

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
      <div className="bg-cover h-[300px] md:h-[633px]" style={BgStyle}>
        <div className=" top-0 left-0 w-full h-full bg-white/75">
          <div className="absolute inset-0  top-[190px] items-center z-20 text-center container flex flex-col gap-3">
            <h2 className="text-[30px] md:text-[56px] font-bold text-[#1A2B4C] ">
              The First Step to Your <br /> Dream Career
            </h2>
            <div className="w-10/12 flex justify-center items-center ">
              <p className="text-[16px] md:text-[20px] text-center font-semibold text-[#1A2B4C]">
                Explore career opportunities that match your interests and
                potential, find professional mentors who are ready to guide you
                personally, and build a more purposeful and meaningful career
                strategy with CareerMate.
              </p>
            </div>
            <div className="btn cursor-pointer flex items-center bg-[#4A90E2] text-white text-[16px] md:text-[18px] font-semibold px-5 py-2 gap-4  rounded-full hover:bg-[#3a78c2] transition duration-300 ease-in-out">
              Start Now
              <span className="bg-white rounded-full p-2">
                <RxDoubleArrowRight className="text-[22px] text-black rounded-full " />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
