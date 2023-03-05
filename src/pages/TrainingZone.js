import React, { Fragment } from "react";
import Hero from "../components/Hero/Hero";
import useScrollToTop from "../hooks/useScrollToTop";
import Training from "../components/Training/Training";
const TrainingZone = () => {
    useScrollToTop();
    return (
        <Fragment>
            <Hero isDynmic>Training</Hero>
            <Training></Training>
        </Fragment>
    );
};

export default TrainingZone;
