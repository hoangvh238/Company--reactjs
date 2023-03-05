import React from "react";
import classes from "./Training.module.scss";
import { getArrayByName } from "../../assets/Gallery";
import Container from "./Container/Container";

const TrainingContent = getArrayByName("TrainingContent");
const Training = ({ page }) => {
  return (
    <div className={classes.container}>
      <div className={`${classes.training} ${page ? classes.page : ""}`}>
        <div className={classes.training__box}>
          {TrainingContent.map(({ id, tiltle, depcripntions, pic }) => (
            <Container
              tiltle={tiltle}
              depcripntions={depcripntions}
              pic={pic}
              id={id}
            ></Container>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Training;
