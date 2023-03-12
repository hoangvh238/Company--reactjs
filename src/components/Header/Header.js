import React, { useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";
import BtnMenu from "../../assets/Image/List.png";
import classes from "./Header.module.scss";
import Nav from "./Nav/Nav";
import Aos from "aos";
import useWindowSize from "../../hooks/useWindowSize";
import Button from "../../UI/Button/Button";

const Header = () => {
  //check moblie
  const [menuOpen, setMenuOpen] = useState(false);
  const size = useWindowSize();
  const [color, setColor] = useState(false);
  //
  const changeColor = () => {
    if (window.scrollY >= 50 && window.innerWidth > 1023) setColor(true);
    else setColor(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return () => window.removeEventListener("scroll", changeColor);
  }, []);

  // menu container open
  useEffect(() => {
    if (menuOpen) {
      setMenuOpen(false);
    }
  }, [size]);

  const handleMenuToggle = () => {
    setMenuOpen((p) => !p);
  };

  const menuToggle = !menuOpen ? (
    <img
      src={BtnMenu}
      onClick={handleMenuToggle}
      className={classes.header_menubtn}
    />
  ) : (
    <CgClose
      className={classes.header__menu__toggle__menubtn}
      onClick={handleMenuToggle}
    />
  );

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <header className={`${classes.header} ${color && classes.header__bg}`}>
      <Nav
        isMenu={null}
        menuToggle={handleMenuToggle}
        top={color ? "0px" : "55px"}
        color={color ? "white" : "black"}
      />
      <div className={classes.header__menu}>
        <div className={classes.header__menu__toggle}>{menuToggle}</div>
        <aside className={`${classes.menu} ${menuOpen && classes.show}`}>
          <Nav isMenu menuToggle={handleMenuToggle} />
        </aside>
      </div>
      {window.innerWidth < 1024 && (
        <Button to="/" className={`${classes.header__btn} `}>
          İletişim
        </Button>
      )}
    </header>
  );
};

export default Header;
