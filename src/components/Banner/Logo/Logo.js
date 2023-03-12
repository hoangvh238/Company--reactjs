import React from "react";
import classes from "./Logo.module.scss";
import Borusan from "../../../assets/Image/icon1.svg";
import Ista from "../../../assets/Image/icon2.svg";
import Book from "../../../assets/Image/icon3.svg";
import AkBank from "../../../assets/Image/icon4.svg";
import AkCan from "../../../assets/Image/icon5.svg";
import ShowAll from "../../../assets/Image/icon6.svg";
import AkTas from "../../../assets/Image/icon7.svg";
import Ola from "../../../assets/Image/icon8.svg";
import Amazone from "../../../assets/Image/icon9.svg";

const list = [
  { group: 1, pic: Borusan },
  { group: 2, pic: Ista },
  { group: 2, pic: Book },
  { group: 3, pic: AkBank },
  { group: 3, pic: AkCan },
  { group: 3, pic: ShowAll },
  { group: 4, pic: AkTas },
  { group: 4, pic: Ola },
  { group: 5, pic: Amazone },
];

function Logo({ type }) {
  const groupClass = `group--type${type}`;
  return (
      <div className={`${classes.group} ${classes[groupClass]}`}>
        {list
          .filter((ad) => ad.group === type)
          .map(({ pic }) => (
            <div className={classes.group__box} key={pic}>
              <img src={pic} className={classes.group__box__icon} />
            </div>
          ))}
      </div>
  );
}

export default Logo;
