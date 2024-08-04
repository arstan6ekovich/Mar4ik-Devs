import React from "react";
import scss from "./Footer.module.scss";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";


const Footer = () => {
  return (
    <footer className={scss.Footer}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.nav}>
            <h3>Copyright © 2024-2027. All rights are reserved</h3>
            <h4>
              Built with <span>♡</span> by <span>NextTS</span>
            </h4>
            <Link href={"https://github.com/arstan6ekovich"}>
            <h2>
              <FaGithub/>
            </h2>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
