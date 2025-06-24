import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Company from "./components/Company";
import Mentor from "./components/Mentor";
import CareerTest from "./components/CareerTest";
import Cta from "./components/Cta";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <Company />
      <Mentor />
      <CareerTest />
      <Cta />
    </>
  );
};

export default App;
