import React, { Component, Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ServicePage from '../pages/ServicePage';
import CoursesPage from '../pages/CoursesPage';
import ProjectPage from '../pages/ProjectPage';
import ContactPage from '../pages/ContactPage';
import RefundPolicyPage from '../pages/RefundPolicyPage';
import TermsPage from '../pages/TermsPage';

class AppRouter extends Component {
    render() {
        return (
            <Fragment>
                <Routes>
                    <Route path="/"         element={<HomePage/>} />
                    <Route path="/about"    element={<AboutPage/>} />
                    <Route path="/service"  element={<ServicePage/>} />
                    <Route path="/course"   element={<CoursesPage/>} />
                    <Route path="/project"  element={<ProjectPage/>} />
                    <Route path="/contact"  element={<ContactPage/>} />
                    <Route path="/refundPolicy" element={<RefundPolicyPage/>} />
                    <Route path="/termsCondition" element={<TermsPage/>} />
                </Routes>
            </Fragment>
        );
    }
}

export default AppRouter;