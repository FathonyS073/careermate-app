import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Company from "./components/Company";
import Mentor from "./components/Mentor";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <Company />
      <Mentor />
    </>
  );
};

export default App;
