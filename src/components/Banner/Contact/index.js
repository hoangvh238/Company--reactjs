import React from "react";
import Users from '@svg/user.svg';
import Button from "../../../ui/Button/index";
import classes from "./style.module.scss";
import Scrolling from "@components/Effect/Scrolling";
import "aos/dist/aos.css";

function Contact() {
  return (
    <div className={classes.contact}>
      <div className={classes.contact__container}>
        <div
          className={classes.container__logo}
          {...Scrolling("zoom-in", "linear")}
        >
          <img src={Users} className={classes.container__logo__user}></img>
        </div>
        <div className={classes.container__content}>
          <h1
            className={classes.container__content__tiltle}
            {...Scrolling("fade-up", "linear")}
          >
            Bize Ulaşın
          </h1>
          <p
            className={classes.container__content__depcriptions}
            {...Scrolling("fade-up", "linear")}
          >
            Çözüm, hizmet ve ürünlerimiz hakkında detaylı bilgi için bizimle
            irtibata geçin.
          </p>
        </div>
        <div {...Scrolling("fade-up", "linear")}>
          <Button
            className={classes.container__btn}
          >
            Bize Ulaşın
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
