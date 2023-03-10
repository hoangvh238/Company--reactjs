import classes from "./Banner.module.scss";
import React from "react";
import Logo from "./Logo/Logo";
import Scrolling from "../Effect/Scrolling";
import Contact from "./Contact/Contact";

const Banner = ({ page }) => {
  return (
    <div className={classes.container}>
      <div className={`${classes.banner} ${page ? classes.page : ""}`}>
        <div className={classes.banner__logo}>
          <div className={classes.banner__logo__content}>
            <h1
              className={classes.content__tiltle}
              {...Scrolling("fade-up", "linear")}
            >
              Referanslarımız
            </h1>
            <p
              className={classes.content__depcriptions}
              {...Scrolling("fade-up", "linear")}
            >
              Bize güvenen ve beraber çalıştığımız iş ortaklarımız
            </p>
          </div>
          <div
            className={classes.banner__logo__gallery}
            {...Scrolling("zoom-in", "linear")}
          >
            <Logo type={1}></Logo>
            <Logo type={2}></Logo>
            <Logo type={3}></Logo>
            <Logo type={4}></Logo>
            <Logo type={5}></Logo>
          </div>
        </div>
        <Contact></Contact>
      </div>
    </div>
  );
};

export default Banner;
