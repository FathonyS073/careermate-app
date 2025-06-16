import React from "react";
import { LogoCompany } from "../services/Company";

const Company = () => {
  return (
    <div className="w-full bg-[#4A90E2] container h-[205px] pt-10">
      <div className="flex justify-between items-center">
        {LogoCompany.map((item) => {
          return (
            <img
              key={item.id}
              src={item.logo}
              className="w-[80px] md:w-[100px] h-[40px]"
              alt=""
            />
          );
        })}
      </div>
    </div>
  );
};

export default Company;
