import React, {Component, Fragment} from 'react';
import {Routes, Route} from "react-router";
import HomePage from "../pages/HomePage";
import ServicePage from "../pages/ServicePage";

class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                    <Routes>
                        <Route path="/" element={<HomePage/>} />
                        <Route path="/service" element={<ServicePage/>} />
                    </Routes>
            </Fragment>
        );
    }
}

export default AppRoute;
