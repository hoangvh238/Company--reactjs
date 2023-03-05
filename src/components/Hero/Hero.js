import React, { Fragment, useEffect, useState } from "react";
import Button from "./../../UI/Button/Button";
import classes from "./Hero.module.scss";
import mobile from "../../assets/Image/mobile.png";
import tablet from "../../assets/Image/tablet.png";
import desktop from "../../assets/Image/desktop.png";
import useWindowSize from "../../hooks/useWindowSize";
import Scrolling from "../Effect/Scrolling";

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
  const [bgImgSrc, setBgImgSrc] = useState(desktop);
  const [newBgImgSrc, setNewBgImgSrc] = useState(null);
  const size = useWindowSize();

  useEffect(() => {
    if (size.width > 1023) setNewBgImgSrc(desktop);
    else {
      setNewBgImgSrc(size.width < 415 ? mobile : tablet);
    }
  }, [size]);

  useEffect(() => {
    if (newBgImgSrc) setBgImgSrc(newBgImgSrc);
  }, [newBgImgSrc]);
  return (
    <div className={classes.container}>
      <img
        data-aos="zoom-out"
        data-aos-easing="linear"
        className={classes.bg}
        style={{ backgroundImage: `url(${bgImgSrc})` }}
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
