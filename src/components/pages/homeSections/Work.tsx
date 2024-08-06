"use client";
import React, { useEffect, useState } from "react";
import scss from "./Work.module.scss";
import instagram from "../../../assets/UI Design - Earth.jpeg";
import temir from "../../../assets/Cinema Web Site Design.jpeg";
import jordan from "../../../assets/Website design “amareckayaa”.jpeg";
import github from "../../../assets/Fiverr _ Find the best global talent.jpeg";
import advup from "../../../assets/Anime&Manga-Hub - Anime and Manga Online HTML5 Website Template.jpeg";
import Image from "next/image";

interface projectsTypes {
  title: string;
  description: any;
  stack: Array<string>;
  codeLink: string;
  demoLink: string;
  image: any;
}
const Work = () => {
  const projects: projectsTypes[] = [
    {
      title: "Mar4ik A-SPACE 🐬",
      description: "A-SPACE Mar4ik: created 20.07.2024",
      stack: ["NextJS", "TypeScript", "ReduxToolkit", "Figma"],
      codeLink: "",
      demoLink: "",
      image: instagram,
    },
    {
      title: "Mar4ik VENOM 🐬",
      description: "VENOM Mar4ik: created 12.04.2024",
      stack: ["NextJS", "TypeScript", "Figma"],
      codeLink: "",
      demoLink: "",
      image: temir,
    },
    {
      title: "Jordan shop 🪙",
      description: "Jordan Mar4ik: created 04.05.2024",
      stack: ["React", "TypeScript", "SCSS", "Figma"],
      codeLink: "",
      demoLink: "",
      image: jordan,
    },

    {
      title: "Mar4ik Anime site 🐬",
      description: "Anime site Mar4ik: created 25.05.2024",
      stack: ["React", "SCSS", "Figma", "TypeScript"],
      codeLink: "",
      demoLink: "",
      image: advup,
    },
    {
      title: "Mar4ik Обьект Дом 🐬",
      description: "Обьект Дом Mar4ik: created 20.07.2024",
      stack: ["Express", "TypeScript", "Figma", "RestAPI", "React"],
      codeLink: "",
      demoLink: "",
      image: github,
    },
  ];

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
  return (
    <section id="work" className={scss.Work}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.title}>
            <h1>
              Projects <br />
              <span>Each project is a unique piece of development 🧩</span>{" "}
            </h1>
          </div>
          <div className="">
            {projects.map((el, index) => (
              <div
                className={`${scss.card} ${
                  index % 2 !== 0 ? scss.row__reverse : ""
                }`}
                key={index + 1}
              >
                <div className={scss.pro__text}>
                  <h3>{el.title}</h3>
                  <p>{el.description}</p>
                  <div className={scss.stack}>
                    {el.stack.map((item, index) => (
                      <p key={index + 1}>{item}</p>
                    ))}
                  </div>
                  <div className={scss.links}>
                    <a className={`${scss.code}`} target="_blank">
                      Code
                    </a>
                    <a className={`${scss.demo}`} target="_blank">
                      Live Demo
                    </a>
                  </div>
                </div>
                <div className={`${scss.pro__img}`}>
                  <a href="" target="_blank">
                    <Image
                      priority={true}
                      quality={25}
                      loading="eager"
                      src={el.image}
                      alt={"project"}
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
