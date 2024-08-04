"use client";
import React, { useState } from "react";
import scss from "./AboutMe.module.scss";
import Image, { StaticImageData } from "next/image";
import img1 from "../../../assets/tech-icons/mac-os-icon.png";
import img2 from "../../../assets/tech-icons/windows-icon.png";
import img3 from "../../../assets/tech-icons/linux-icon.png";
import img4 from "../../../assets/tech-icons/html-icon.png";
import img5 from "../../../assets/tech-icons/css-icon.png";
import img6 from "../../../assets/tech-icons/java-script-icon.png";
import img7 from "../../../assets/tech-icons/type-script-icon.png";
import img8 from "../../../assets/tech-icons/react-icon.png";
import img9 from "../../../assets/tech-icons/redux-icon.png";
import img10 from "../../../assets/tech-icons/vite-icon.png";
import img11 from "../../../assets/tech-icons/next-js-icon.png";
import img12 from "../../../assets/tech-icons/scss-icon.png";
import img13 from "../../../assets/tech-icons/git-icon.png";
import img14 from "../../../assets/tech-icons/node-js-icon.png";
import img15 from "../../../assets/tech-icons/express-icon.png";
import img16 from "../../../assets/tech-icons/fastify.png";
import img17 from "../../../assets/tech-icons/nest-js-icon.png";
import img18 from "../../../assets/tech-icons/prisma.png";
import img19 from "../../../assets/tech-icons/supabase.png";
import img21 from "../../../assets/tech-icons/my-sql-icon.png";
import img23 from "../../../assets/tech-icons/docker-icon.png";
import img22 from "../../../assets/tech-icons/postgresql.png";
import about_pic from "../../../assets/tech-icons/about-pic.png";
import spiner_pic from "../../../assets/tech-icons/spiner-pic.png";

interface techIconsTypes {
  icon: StaticImageData;
  name: string;
}

const AboutMe = () => {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  const tech_icons: techIconsTypes[] = [
    { icon: img1, name: "MacOS" },
    { icon: img2, name: "Linux" },
    { icon: img3, name: "Windows" },
    { icon: img4, name: "HTML" },
    { icon: img5, name: "CSS" },
    { icon: img6, name: "JavaScript" },
    { icon: img7, name: "TypeScript" },
    { icon: img8, name: "React" },
    { icon: img9, name: "Redux" },
    { icon: img10, name: "Vite" },
    { icon: img11, name: "Next.js" },
    { icon: img12, name: "SCSS" },
    { icon: img14, name: "Node.js" },
    { icon: img15, name: "Express" },
    { icon: img16, name: "Fastify" },
    { icon: img17, name: "Nest.js" },
    { icon: img18, name: "Prisma" },
    { icon: img19, name: "Supabase" },
    { icon: img21, name: "MySQL" },
    { icon: img23, name: "PostgreSQL" },
    { icon: img22, name: "Docker" },
    { icon: img13, name: "Git" },
  ];

  return (
    <section id="about" className={scss.About}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.TechStack}>
            <h1>Tech Stack</h1>
          </div>
          <div className={scss.logos}>
            {tech_icons.map((item, index) => (
              <div
                key={index + 1}
                className={`${scss.text__z__index} ${scss.icon}`}
                onMouseEnter={() => setActiveTooltip(item.name)}
                onMouseLeave={() => setActiveTooltip(null)}
              >
                <Image
                  priority={true}
                  quality={25}
                  loading="eager"
                  className={scss.icon}
                  src={item.icon}
                  alt={item.name}
                />
                {activeTooltip === item.name && (
                  <div className={scss.tech__title}>{item.name}</div>
                )}
              </div>
            ))}
          </div>
          <div className={scss.left}>
            <Image
              priority={true}
              quality={25}
              loading="eager"
              className={`${scss.img}`}
              src={about_pic}
              alt={"labtop"}
            />
            <span>
              <Image
                priority={true}
                quality={25}
                loading="eager"
                className={`${scss.icon}`}
                src={spiner_pic}
                alt={"icon"}
              />
              <h1 className={scss.programist}>🧑🏻‍💻</h1>
            </span>
          </div>
          <div className={scss.AboutMe}>
            <div className={scss.nav}>
              <h1
                style={{
                  color: "#9336fd",
                }}
                className={scss.About_h1}
              >
                About me
              </h1>
              <h1
                style={{
                  color: "white",
                }}
              >
                Experienced Front-End Developer from <br /> Kyrgyzstan 📍
              </h1>
              <p>
              As a Front-End developer, my skill set covers a wide range of
              technologies, including ORM and CRM. My primary objective is to
              create and maintain responsive websites with a focus on delivering
              impeccable user experiences and ensuring robust Back-End security.
              My specialization lies in developing dynamic interfaces using
              clean and optimized code. I am also adept at employing
              cutting-edge development tools and adhering to advanced
              methodologies. My involvement in cross-functional teams is a
              pivotal factor that enables the creation of exceptional web
              applications.
            </p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
