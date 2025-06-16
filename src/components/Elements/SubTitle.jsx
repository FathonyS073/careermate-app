import React from "react";

const SubTitle = ({ title }) => {
  return (
    <div>
      <h2 className=" text-[24px] w-1/4 md:text-[20px] font-bold bg-gradient-to-r pl-2 py-2 from-[#4A90E2]/50 via-white/0 to-[#F5F6FA] text-transparent border-l-[3px] border-[#4A90E2]">
        <span className="text-subTitle">{title}</span>
      </h2>
    </div>
  );
};

export default SubTitle;
