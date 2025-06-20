import React from "react";
import SubTitle from "./Elements/SubTitle";
import { MentorImage } from "../services/MentorImage";
import Image1 from "../assets/Images/1.png";

const Mentor = () => {
  return (
    <div className="bg-backgroundPrimer container py-14">
      <div className="flex items-center justify-center flex-col gap-3">
        {/* Subtittle */}
        <SubTitle title="Mentor CareerMate" />
        {/* Tittle and Desk */}
        <h1 className="text-[30px] md:text-[45px] text-title font-bold">
          Meet Our Career Mentors
        </h1>
        <p className="text-[16px] md:text-[20px] text-[#848484] w-2/3 text-center">
          Learn directly from experienced professionals in various industries.
          Choose a mentor based on your career needs and get personalized 1-on-1
          guidance.
        </p>
      </div>
      {/* Image Mentor */}
      <div className="flex flex-row my-10">
        <div className="card bg-mentor  w-[369px] h-[288px] items-center flex justify-center">
          {/* Image */}
          <img src={Image1} alt="" width="203px" height="295px" className="" />
          {/* Name & Position*/}
          <div className="absolute bg-cardmentor py-3 pr-14 pl-2 mt-36 rounded-[5px] border-[#C5DCF6] border-2 flex flex-col gap-2">
            <h1 className="text-title font-medium text-[20px]">
              Olivia Christin
            </h1>
            <p className="text-desk font-[20px]">
              Specialized Digital Marketing
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentor;
