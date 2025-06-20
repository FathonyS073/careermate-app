import React from "react";

const SubTitle = ({ title }) => {
  return (
    <div className="w-fit">
      <h2 className="text-[24px] md:text-[20px] font-medium bg-gradient-to-r pl-2 py-2 from-[#4A90E2]/50 via-white/0 to-[#F5F6FA] text-transparent border-l-[3px] border-[#4A90E2] whitespace-nowrap">
        <span className="text-subTitle">{title}</span>
      </h2>
    </div>
  );
};

export default SubTitle;
