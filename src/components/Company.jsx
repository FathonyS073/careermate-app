import React from "react";
import { LogoCompany } from "../services/Company";

const Company = () => {
  return (
    <div className="w-full bg-[#4A90E2] container h-[155px] pt-10 items-center">
      <div className="flex justify-between items-center">
        {LogoCompany.map((item) => {
          return (
            <img
              key={item.id}
              src={item.logo}
              width={item.width}
              height={item.height}
              alt=""
            />
          );
        })}
      </div>
    </div>
  );
};

export default Company;
