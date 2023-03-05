import React, { Fragment } from "react";
import Hero from "../components/Hero/Hero";
import useScrollToTop from "../hooks/useScrollToTop";
import Banner from "../components/Banner/Banner";
const Contact = () => {
    useScrollToTop();
    return (
        <Fragment>
            <Hero isDynmic >CONTACT US</Hero>
            <Banner></Banner>
        </Fragment>
    );
};

export default Contact;
