import React from "react";
import CareerTestImage from "../assets/Images/CareerTest.png";
import SubTitle from "./Elements/SubTitle";
import { FaC, FaCircleCheck } from "react-icons/fa6";

const PointTest = [
  {
    id: 1,
    desk: "Fast and Easy to Complete",
  },
  {
    id: 2,
    desk: "Based on Psychological Research",
  },
  {
    id: 3,
    desk: "Personalized Career Recommendations",
  },
  {
    id: 4,
    desk: "Immediate Results and Next Steps",
  },
];

const CareerTest = () => {
  return (
    <div className="container bg-[#F7FAFF] py-16 flex items-center justify-between">
      <div>
        {/* Image */}
        <img src={CareerTestImage} alt="" className="w-[620px]" />
      </div>
      {/* Desk Career Test */}
      <div className="w-1/2 flex flex-col items-start ">
        <SubTitle title="Career Test" />
        <h1 className="text-[30px] md:text-[35px] text-title font-bold mb-2 w-2/4">
          Discover Your Best Career Path
        </h1>
        <p className="text-[16px] md:text-[20px] text-[#848484] w-full">
          Take our career assessment test to uncover your strengths, interests,
          and the ideal career paths tailored for you. Quick, insightful, and
          designed to guide your next steps with confidence.
        </p>
        {PointTest.map((item) => {
          return (
            <div className="mt-3 w-full py-2 px-4 rounded-[10px] border border-[#C5DCF6] bg-[#E8F1FC]">
              <h2
                className="card-title flex items-center gap-4 font-semibold text-[20px]"
                key={item.id}
              >
                <span>
                  <FaCircleCheck className="text-[#4A90E2]" />
                </span>
                {item.desk}
              </h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CareerTest;
