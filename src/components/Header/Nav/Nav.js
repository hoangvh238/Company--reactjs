import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../UI/Button/Button";
import classes from "./Nav.module.scss";
import "aos/dist/aos.css";
import Scrolling from "../../Effect/Scrolling";

const Nav = ({ isMenu, menuToggle, top, color }) => {
  const handleMouseEnter = (e) => {
    e.target.style.color = top > 50 ? "white" : "#f84646";
  };

  const handleMouseLeave = (e) => {
    e.target.style.color = color;
  };

  return (
    <>
      <nav className={isMenu ? classes.menu__nav : classes.nav} style={{ top }}>
        <ul>
          <li
            onClick={menuToggle}
            {...Scrolling("fade-down", "linear", 300)}
            data-aos-delay="100"
          >
            <Link
              to="/locations"
              style={{ color }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Çözüm ve Hizmetler
            </Link>
          </li>
          <li
            onClick={menuToggle}
            {...Scrolling("fade-down", "linear", 300)}
            data-aos-delay="200"
          >
            <Link
              to="/contact"
              style={{ color }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Ürünler
            </Link>
          </li>
          <li
            onClick={menuToggle}
            {...Scrolling("fade-down", "linear", 300)}
            data-aos-delay="300"
          >
            <Link
              to="/training"
              style={{ color }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Teknolojiler
            </Link>
          </li>
          <li
            onClick={menuToggle}
            {...Scrolling("fade-down", "linear", 300)}
            data-aos-delay="400"
          >
            <Link
              to="/learnmore"
              style={{ color }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              İnsan Kaynakları
            </Link>
          </li>
          <li
            onClick={menuToggle}
            {...Scrolling("fade-down", "linear", 300)}
            data-aos-delay="500"
          >
            <Link
              to="/"
              style={{ color }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Kurumsal
            </Link>
          </li>
        </ul>
        {!isMenu && (
          <div {...Scrolling("fade-left", "linear", 300)} data-aos-delay="600">
            <Button to="/" className={classes.nav__button} onClick={menuToggle}>
              İletişim
            </Button>
          </div>
        )}
      </nav>
    </>
  );
};

export default Nav;
