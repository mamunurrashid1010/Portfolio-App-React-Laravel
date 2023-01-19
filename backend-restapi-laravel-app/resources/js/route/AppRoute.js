import React, {Component, Fragment} from 'react';
import {Routes, Route} from "react-router";
import HomePage from "../pages/HomePage";
import ServicePage from "../pages/ServicePage";
import ContactPage from "../pages/ContactPage";
import LoginPage from "../pages/LoginPage";

class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                    <Routes>
                        <Route path="/home" element={<HomePage/>} />
                        <Route path="/service" element={<ServicePage/>} />
                        <Route path="/contact" element={<ContactPage/>} />
                        <Route path="/" element={<LoginPage/>}/>
                    </Routes>
            </Fragment>
        );
    }
}

export default AppRoute;
