import React, { useEffect, useState } from "react";
import { getArrayByName } from "../../../assets/Gallery";
import classes from "./Logo.module.scss";
import useWindowSize from "../../../hooks/useWindowSize";

const all = getArrayByName("all");
const custom = getArrayByName("custom");

function Logo({ type }) {

  const size = useWindowSize();
  const [list, setList] = useState(size.width < 1024 ? custom : all);

  useEffect(() => {
    setList(size.width < 1024 ? custom : all);
  }, [size, all, custom]);

  return (
    <div className={classes.gallery__group}>
      {list
        .filter((ad) => ad.group === type)
        .map(({ id, pic }) => (
          <div className={classes.gallery__group__box} key={id}>
            <img src={pic} className={classes.box__icon} />
          </div>
        ))}
    </div>
  );
}

export default Logo;
