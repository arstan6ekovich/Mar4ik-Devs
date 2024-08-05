"use client";
import scss from "./Header.module.scss";
import { Link as ScrollLink } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { FC, ReactNode, useEffect, useState } from "react";
import BurgerMenu from "./BurgerMenu";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "../../../assets/Без названия (1).png";
import Image from "next/image";
import { CiMenuFries } from "react-icons/ci";


const links = [
  {
    id: 1,
    name: "Home",
    href: "home",
  },
  {
    id: 2,
    name: "About",
    href: "about",
  },
  {
    id: 3,
    name: "Work",
    href: "work",
  },
  {
    id: 4,
    name: "Contact",
    href: "contact",
  },
];

const Header = () => {
  const [scrollPostion, setScrollPostion] = useState(0);
  console.log(scrollPostion);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPostion(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handlerHeader = () => setIsMobile(window.innerWidth < 1000);
    window.addEventListener("resize", handlerHeader);
    handlerHeader();
    return () => {
      window.addEventListener("resize", handlerHeader);
    };
  }, []);
  return (
    <header
      data-aos="fade-down"
      className={scss.Header}
      style={{
        background: scrollPostion < 28 ? "#e8e8ef00" : "#e8e8ef00",
        backdropFilter: scrollPostion < 28 ? "blur(0px)" : "blur(20px)",
      }}
    >
      <div
        className={scss.scroll}
        style={{
          transition: "1s",
          padding: scrollPostion > 28 ? "0px" : "10px",
        }}
      >
        <div className="container">
          <div className={scss.content}>
            <div className={scss.logo}>
              <h1>Mar4ik</h1>
            </div>
            {isMobile ? (
              <>
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  style={{
                    color: "white",
                    background: "#52527600",
                    border: "none",
                    fontSize: "30px",
                    position: "absolute",
                    marginLeft: "350px",
                  }}
                >
                  <CiMenuFries />
                </button>
                <BurgerMenu isOpen={isOpen} links={links} />
              </>
            ) : (
              <>
                <nav className={scss.nav}>
                  <ul>
                    {links.map((el, index) => (
                      <>
                        <p>{el.id} .</p>
                        <li key={index}>
                          <ScrollLink
                            className="links"
                            activeClass="active"
                            to={el.href}
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                          >
                            {el.name}
                          </ScrollLink>
                        </li>
                      </>
                    ))}
                  </ul>
                </nav>
                <div className={scss.resume}>
                  <button>Resume</button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
