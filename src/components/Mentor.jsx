import React from "react";
import SubTitle from "./Elements/SubTitle";
import { MentorImage } from "../services/MentorImage";
import Image1 from "../assets/Images/1.png";

const Mentor = () => {
  return (
    <div className="bg-backgroundPrimer py-14">
      <div className="container flex items-center justify-center flex-col gap-3">
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
      <div className="flex flex-row my-10 w-full gap-3  ">
        {MentorImage.map((item) => {
          return (
            <div
              className="card bg-mentor  w-[369px] h-[288px] items-center flex justify-center "
              key={item.id}
            >
              {/* Image */}
              <div className="w-[203px] h-[288px] flex items-end">
                <img
                  src={item.img}
                  alt=""
                  width="203px"
                  height="295px"
                  className="filter grayscale hover:grayscale-0"
                />
              </div>
              {/* Name & Position*/}
              <div className="absolute bg-cardmentor w-[246px] h-[90px] mt-36 pl-3 rounded-[5px] border-[#C5DCF6] border-2 flex flex-col gap-1 justify-center overflow-x-hidden scrollbar-hide scroll-smooth">
                <h1 className="text-title font-medium text-[20px]">
                  {item.name}
                </h1>
                <p className="text-desk font-[20px]">{item.position}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Mentor;
