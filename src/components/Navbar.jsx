import React, { use } from "react";
import { NavbarMenu } from "../services/DataNav";
import Logo from "../assets/Images/Logo.png";
import Button from "./Elements/Button";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="container pt-5 flex justify-between gap-5">
          {/* Logo Section*/}
          <img src={Logo} className="w-[80px] md:w-[100px] h-[40px] " alt="" />
          {/* Menu Section*/}
          <div className="hidden md:block items-baseline pt-2">
            <ul className="flex item-center md:gap-10">
              {NavbarMenu.map((item) => {
                return (
                  <li key={item.id}>
                    <a href={item.link}>{item.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* Button Section*/}
          <div className="hidden md:block">
            <Button
              classname="border-black border w-[130px] items-center"
              type="submit"
            >
              {" "}
              Login
            </Button>
            <Button
              classname="bg-[#4A90E2] w-[130px] text-white md:mx-3"
              type="submit"
            >
              {" "}
              Sign Up
            </Button>
          </div>

          {/* Hamburger Section*/}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
