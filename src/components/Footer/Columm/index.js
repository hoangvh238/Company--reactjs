import React from "react";
import classes from "./style.module.scss";
import Scrolling from "@components/Effect/Scrolling";

function Columm({ id, headline, links }) {
  return (
    <div className={classes.content__col} key={id}>
      <div
        className={classes.content__col__headline}
        {...Scrolling("zoom-in", "linear")}
      >
        {headline}
      </div>
      <div className={classes.content__col__links}>
        {links.map((link, index) => (
          <div
            className={classes.content__col__links}
            key={index + 1}
            {...Scrolling("fade-up", "linear")}
          >
            <a href="/">{link}</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Columm;
