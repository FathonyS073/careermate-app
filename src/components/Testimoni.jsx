import React from "react";
import SubTitle from "./Elements/SubTitle";

const Testimoni = () => {
  return (
    <div className="container py-10 bg-[#F3F9FF]">
      {/* Header Section */}
      <div className="flex items-center flex-col gap-4">
        <SubTitle title="Testimoni CareerMate" />
        <h1 className="text-[30px] md:text-[45px] text-title font-bold text-center">
          Hear What Our <br /> User Saying
        </h1>
        <p className="text-[16px] md:text-[20px] text-[#848484] w-2/4 text-center">
          Hear real stories from students and fresh graduates who have built
          their future with CareerMate. Insight, guidance and real opportunities
          start here.
        </p>
      </div>
    </div>
  );
};

export default Testimoni;
