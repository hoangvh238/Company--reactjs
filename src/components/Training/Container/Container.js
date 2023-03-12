import React from "react";
import classes from "./Container.module.scss";
import Button from "../../../UI/Button/Button";
import "aos/dist/aos.css";
import Scrolling from "../../Effect/Scrolling";

function Container({tiltle, depcripntions, pic}) {
  return (
    <div
      className={classes.content}
      key={pic}
      {...Scrolling("fade-up", "linear")}
    >
      <div className={classes.content__introduce}>
        <h1
          data-splitting
          className={classes.content__introduce__tiltle}
          {...Scrolling("fade-up", "linear")}
          data-aos-delay="200"
        >
          {tiltle}
        </h1>
        <p
          className={classes.content__introduce__depcriptions}
          {...Scrolling("fade-up", "linear")}
          data-aos-delay="250"
        >
          {depcripntions}
        </p>
        <div {...Scrolling("fade-up", "linear")} data-aos-delay="100">
          <Button className={classes.content__introduce__btn}>Keşfet</Button>
        </div>
      </div>
      <img src={pic} className={classes.content__pic}></img>
    </div>
  );
}

export default Container;
