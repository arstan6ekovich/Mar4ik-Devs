import React, { FC } from "react";
import scss from "./BurgerMenu.module.scss";
import { Link as ScrollLink } from "react-scroll";

interface Links {
  id: number;
  name: string;
  href: string;
}

interface LinksType {
  links: Links[];
  isOpen: boolean;
}

const BurgerMenu: FC<LinksType> = ({ isOpen, links }) => {
  return (
    <div
      className={
        isOpen ? `${scss.burger_menu} ${scss.active}` : `${scss.burger_menu}`
      }
    >
      <div className={scss.content}>
        <ul>
          {links.map((el) => (
            <>
              <p>{el.id} .</p>
              <li>
                {" "}
                <ScrollLink
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
      </div>
    </div>
  );
};

export default BurgerMenu;
