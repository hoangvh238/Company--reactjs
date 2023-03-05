import React from "react";
import classes from "./Item.module.scss";
import Scrolling from "../../Effect/Scrolling";
function Item({ id, tiltle, depcriptions, icon }) {
  return (
    <div className={classes.gallery__item} key={id}>
      <img
        src={icon}
        alt={tiltle}
        className={classes.gallery__item__img}
        {...Scrolling("zoom-in","linear")}
        data-aos-delay="30"
      />
      <div className={classes.gallery__item__content}>
        <h2
          className={classes.gallery__item__content__tiltle}
          {...Scrolling("fade-up","linear")}
          data-aos-delay="50"
        >
          {tiltle}
        </h2>
        <p
          className={classes.gallery__item__content__depcriptions}
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
