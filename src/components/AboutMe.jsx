import React from "react";
import { PointAbout } from "../services/DataAbout";
import { FaC, FaCircleCheck } from "react-icons/fa6";
import SubTitle from "./Elements/SubTitle";

const AboutMe = () => {
  return (
    <div className="container py-10 bg-aboutme h-full">
      <SubTitle title="Why CareerMate" />
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
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 my-10 overflow-hidden">
        {PointAbout.map((item) => {
          return (
            <card
              key={item.id}
              className="card bg-[#E7EFF8] p-7 rounded-[10px] border border-[#C5DCF6]"
            >
              <div className="card-body">
                <h2 className="card-title mb-4 flex items-center gap-2 font-semibold text-[20px]">
                  <span>
                    <FaCircleCheck className="text-[#4A90E2]" />
                  </span>
                  {item.Tittle}
                </h2>
                <p className="text-[18px] text-[#848484]">{item.caption}</p>
              </div>
            </card>
          );
        })}
      </div>
    </div>
  );
};

export default AboutMe;
