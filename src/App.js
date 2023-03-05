import { Fragment } from "react";
import { Route, Switch } from "react-router";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import LearnMore from "./pages/LearnMore";
import LocationsPage from "./pages/LocationsPage";
import TrainingZone from "./pages/TrainingZone";
function App() {
    return (
        <Fragment>
            <Header />
            <Switch>
                <Route path="/locations">
                    <LocationsPage />
                </Route>
                <Route path="/contact">
                    <Contact/>
                </Route>
                <Route path="/training">
                    <TrainingZone></TrainingZone>
                </Route>
                <Route path="/learnmore">
                    <LearnMore />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>
            <Footer></Footer>
        </Fragment>
    );
}

export default App;
