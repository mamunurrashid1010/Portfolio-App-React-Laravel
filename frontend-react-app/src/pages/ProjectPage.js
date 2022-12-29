import React, { Component, Fragment } from 'react';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import PageTop from '../components/PageTop/PageTop';
import AllProject from '../components/AllProject/AllProject';
import Footer from '../components/Footer/Footer';

class ProjectPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation/>
                <PageTop  pageTitle="Projects" />
                <AllProject />
                <Footer/>
            </Fragment>
        );
    }
}

export default ProjectPage;