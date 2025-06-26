import React from "react";
import SubTitle from "./Elements/SubTitle";
import ProfileImg from "../assets/Images/Daniel.png";
const Testimoni = () => {
  return (
    <div className="bg-[#F3F9FF]">
      <div className="container py-10 bg-[#F3F9FF]">
        {/* Header Section */}
        <div className="flex items-center flex-col gap-4">
          <SubTitle title="Testimoni CareerMate" />
          <h1 className="text-[30px] md:text-[45px] text-title font-bold text-center">
            Hear What Our <br /> User Saying
          </h1>
          <p className="text-[16px] md:text-[20px] text-[#848484] w-2/4 text-center">
            Hear real stories from students and fresh graduates who have built
            their future with CareerMate. Insight, guidance and real
            opportunities start here.
          </p>
        </div>
        <div className="">
          <div className="bg-[#ECF5FF] border border-[#C5DCF6] rounded-[10px] mt-10 p-7 w-[331px] h-[400px] flex flex-col justify-between">
            {/* Deskripsi */}
            <p className="text-[16px] md:text-[22px] text-[#848484] text-end">
              "CareerMate opened my eyes to career paths I never imagined. The
              mentorship sessions truly changed my mindset!"
            </p>
            {/* Profile */}
            <div className="flex items-center flex-row gap-3">
              <img src={ProfileImg} alt="" />
              <div>
                <h1>Daniel Thompson</h1>
                <p>Final Year Student</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimoni;
