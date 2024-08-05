"use client";
import React, { useEffect, useState } from "react";
import scss from "./Welcome.module.scss";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";
import Image from "next/image";
import user from "../../../assets/tech-icons/userImage.jpg";
import AOS from "aos";

const Welcome = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  console.log(scrollPosition);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="home" className={scss.Welcome}>
      <div className="container">
        <div className={scss.content}>
          <h1>Hi I&apos;m Marlen (Mar4ik) </h1>
          <h1 className={scss.title}>
            I am
            <span>
              <Typewriter
                words={[
                  "Front-End Developer",
                  "Back-End Developer",
                  "Full-Stack Developer",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={50}
                deleteSpeed={10}
                delaySpeed={1500}
              />
            </span>
          </h1>
          <div className={scss.nav} data-aos="fade-right">
            <p>
              I’m a software engineer specializing in building (and occasionally
              designing) exceptional digital experiences. Currently, I’m focused
              on building accessible, human-centered products in{" "}
              <Link href={"https://www.instagram.com/arstan6ekovich__/"}>
                <span>Kyrgyzstan 📍</span>
              </Link>
            </p>
          </div>
          <div className={scss.button}>
            <Link href="https://t.me/+ZxYbQGpHeP9hNmNi">
              <button>My pride is Mar4ik Dev! </button>
            </Link>
          </div>
          <div className={scss.UserImage}>
            <Image src={user} alt="photo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
