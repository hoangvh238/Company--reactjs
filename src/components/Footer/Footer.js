import React from "react";
import classes from "./Footer.module.scss";
import { getArrayByName } from "../../assets/Gallery";
import Columm from "./Columm/Columm";
const footerColumns = getArrayByName("footerColumns");
const socials = getArrayByName("socials");

const Footer = () => {
  return (
    <div className={classes.container}>
      <footer className={classes.footer}>
        <div className={classes.footer__content}>
          {footerColumns.map(({ id, headline, links }) => (
            <Columm
              id={id}
              headline={headline}
              links={links}
            ></Columm>
          ))}
        </div>
        <div className={classes.footer__base}>
          <span className={classes.footer__base__year}>
            © Copyright 2010-2021 - Can Çevik
          </span>
          <div className={classes.footer__base__socials}>
            {socials.map((socials, index) => (
              <img src={socials.icon} key={index}></img>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
