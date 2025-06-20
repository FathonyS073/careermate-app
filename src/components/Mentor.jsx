import React from "react";
import SubTitle from "./Elements/SubTitle";

const Mentor = () => {
  return (
    <div className="bg-backgroundPrimer container py-14">
      <div className="flex items-center justify-center flex-col gap-3">
        <SubTitle title="Mentor CareerMate" />
        <h1 className="text-[30px] md:text-[45px] text-title font-bold">
          Meet Our Career Mentors
        </h1>
        <p className="text-[16px] md:text-[20px] text-[#848484] w-2/3 text-center">
          Learn directly from experienced professionals in various industries.
          Choose a mentor based on your career needs and get personalized 1-on-1
          guidance.
        </p>
      </div>
    </div>
  );
};

export default Mentor;
