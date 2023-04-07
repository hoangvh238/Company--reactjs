import { Fragment } from "react";
import { Route, Switch } from "react-router";
import Footer from "@components/Footer/index";
import Header from "@components/Header/index";
import Banner from "@components/Banner/index";
import Hero from "@components/Hero/index";
import Locations from "@components/Locations/index";
import Training from "@components/Training/index";
function App() {
    return (
        <Fragment>
            <Header />
            <Switch>
                <Route path="/locations">
                    <Locations page={true} />
                </Route>
                <Route path="/contact">
                    <Hero isDynmic >CONTACT US</Hero>
                    <Banner></Banner>
                </Route>
                <Route path="/training">
                    <Hero isDynmic>Training</Hero>
                    <Training></Training>
                </Route>
                <Route path="/learnmore">
                    <Hero isDynmic>Learn More</Hero>
                </Route>
                <Route exact path="/">
                    <Hero />
                    <Locations />
                    <Training></Training>
                    <Banner></Banner>
                </Route>
            </Switch>
            <Footer></Footer>
        </Fragment>
    );
}

export default App;
