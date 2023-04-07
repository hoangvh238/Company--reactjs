import React, { Fragment} from "react";
import Button from "../../ui/Button/index";
import classes from "./style.module.scss";
import Scrolling from "@components/Effect/Scrolling";

const HomePageContent = () => {
  return (
    <Fragment>
      <h1
        className={classes.hero__content__title}
        {...Scrolling("fade-right", "linear")}
        data-aos-delay="200"
      >
        Bilgi Teknolojilerinde 23 Yıllık Tecrübe
      </h1>
      <p
        className={classes.hero__content__description}
        {...Scrolling("fade-right", "linear")}
        data-aos-delay="300"
      >
        Müşterilerimizin yüksek kalite seviyelerini koruyabilmeleri için farklı
        sektörlerde tecrübe kazanmış uzman kadrolarımızla Proje Yönetimi, İş
        Analizi ve Test Yönetimi hizmetleri sunmaktayız.
      </p>
      <div
        className={classes.hero__contact}
        {...Scrolling("fade-right", "linear")}
        data-aos-delay="400"
      >
        <input
          className={classes.hero__contact__input}
          type="email"
          placeholder="Mail bültenimize kayıt ol"
        />
        <div {...Scrolling("fade-right", "linear")} data-aos-delay="500">
          <Button className={classes.hero__contact__btn} href="/">
            Kayıt Ol
          </Button>
        </div>
      </div>
    </Fragment>
  );
};

const Hero = ({ isDynmic, children }) => {
  return (
    <div className={classes.container}>
      <img
        data-aos="zoom-out"
        data-aos-easing="linear"
        className={`${classes.bg} bg--trans bg--normal`}
      />
      <div className={classes.hero}>
        <div
          className={classes.hero__content}
          data-aos="zoom-in"
          data-aos-easing="linear"
        >
          {!isDynmic && <HomePageContent />}
          {isDynmic && (
            <h1 className={classes.hero__content__title}>{children}</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
