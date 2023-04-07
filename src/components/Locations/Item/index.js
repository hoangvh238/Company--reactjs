import React from "react";
import classes from "./style.module.scss";
import Scrolling from "../../Effect/Scrolling";
function Item({ id, tiltle, depcriptions, icon }) {
  return (
    <div className={classes.item} key={id}>
      <img
        src={icon}
        alt={tiltle}
        className={classes.item__img}
        {...Scrolling("zoom-in","linear")}
        data-aos-delay="30"
      />
      <div className={classes.item__content}>
        <h2
          className={classes.item__content__tiltle}
          {...Scrolling("fade-up","linear")}
          data-aos-delay="50"
        >
          {tiltle}
        </h2>
        <p
          className={classes.item__content__depcriptions}
          {...Scrolling("fade-up","linear")}
          data-aos-delay="70"
        >
          {depcriptions}
        </p>
      </div>
    </div>
  );
}

export default Item;
