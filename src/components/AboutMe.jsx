import React from "react";

const AboutMe = () => {
  return (
    <div className="container py-10 bg-aboutme h-full">
      <h2 className=" text-[24px] w-1/4 md:text-[20px] font-bold bg-gradient-to-r pl-2 py-2 from-[#4A90E2]/50 via-white/0 to-[#F5F6FA] text-transparent border-l-[3px] border-[#4A90E2]">
        <span className="text-subTitle">Why CareerMate</span>
      </h2>
      <div className="my-5 flex justify-between items-start">
        <h1 className="text-[30px] md:text-[45px] font-bold w-1/2">
          Build Your Career with <br /> Trusted Support
        </h1>
        <p className="text-[15px] md:text-[20px] w-1/2 pt-3 font-normal text-[#848484]">
          Planning for the future isn't easy without direction. CareerMate is
          here for students and fresh graduates, helping them recognize their
          potential, explore careers, and connect with professional mentors.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
