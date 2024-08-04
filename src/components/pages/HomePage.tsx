"use client";
import React from "react";
import Welcome from "./homeSections/Welcome";
import AboutMe from "./homeSections/AboutMe";
import Contact from "./homeSections/Contact";
import Work from "./homeSections/Work";
import { Snowfall } from "react-snowfall";
import scss from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <div className={scss.Home}>
      <Snowfall
        style={{
          position: "fixed",
          width: "100%",
          transition: "2s",
        }}
        snowflakeCount={15}
      ></Snowfall>
      <Welcome />
      <AboutMe />
      <Work />
      <Contact />
    </div>
  );
};

export default HomePage;
