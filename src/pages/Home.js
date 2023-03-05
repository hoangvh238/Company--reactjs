import React, { Fragment } from "react";
import Hero from "../components/Hero/Hero";
import Locations from "../components/Locations/Locations";
import Training from "../components/Training/Training";
import Banner from "../components/Banner/Banner";
import useScrollToTop from "../hooks/useScrollToTop";


const Home = () => {
    useScrollToTop();
    return (
        <Fragment>
            <Hero />
            <Locations/>
            <Training></Training>
            <Banner></Banner>
        </Fragment>
    );
};

export default Home;
