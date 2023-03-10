import React from "react";
import classes from "./Footer.module.scss";
import Next from "../../../assets/Image/next.svg";
import Scrolling from "../../Effect/Scrolling";

function Footer() {
  return (
    <div className={classes.footer} data-aos="fade-up">
      <div className={classes.footer__content}>
        <h2
          className={classes.footer__content__tiltle}
          {...Scrolling("fade-up", "linear")}
        >
          Test Yönetimiyle Neler Sağlıyoruz?
        </h2>
        <p
          className={classes.footer__content__depcriptions}
          {...Scrolling("fade-up", "linear")}
        >
          IoT Destekli Çözümler
        </p>
      </div>
      <div className={classes.footer__map}>
        <p
          className={classes.footer__map__small}
          {...Scrolling("fade-up", "linear",20)}
          data-aos-delay ="100"
        >
          Yazılım Kalitesini Arttırıyoruz
        </p>
        <img
          src={Next}
          className={classes.footer__map__icon}
          {...Scrolling("fade-up", "linear", 0)}
        ></img>
        <p
          className={classes.footer__map__normal}
          {...Scrolling("fade-up", "linear",20)}
          data-aos-delay ="100"
        >
          Olası Hataları Önceden Belirliyoruz
        </p>
        <img
          src={Next}
          className={classes.footer__map__icon}
          {...Scrolling("fade-up", "linear", 0)}
        ></img>
        <p
          className={classes.footer__map__normal}
          {...Scrolling("fade-up", "linear",20)}
          data-aos-delay ="100"
        >
          Oluşabilecek Riskleri Önlüyoruz
        </p>
        <img
          src={Next}
          className={classes.footer__map__icon}
          {...Scrolling("fade-up", "linear", 0)}
        ></img>
        <p
          className={classes.footer__map__normal}
          {...Scrolling("fade-up", "linear",20)}
            data-aos-delay ="100"
        >
          Zaman ve Maliyetten Tasarruf Sağlıyoruz
        </p>
      </div>
    </div>
  );
}

export default Footer;
