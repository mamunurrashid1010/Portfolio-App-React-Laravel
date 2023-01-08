import React, { Component, Fragment } from 'react';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import PageTop from '../components/PageTop/PageTop';
import Footer from '../components/Footer/Footer';
import ProjectDetails from '../components/Projects/ProjectDetails';

class ProjectDetailsPage extends Component {
    constructor(){
        super();
        this.state={
            projectId: window.location.href.split('/')[5],
        }
    }

    componentDidMount(){
        window.scroll(0,0);
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Project Details"/>
                <PageTop  pageTitle="Projects Details" />
                <ProjectDetails id={this.state.projectId} />
                <Footer/>
            </Fragment>
        );
    }
}

export default ProjectDetailsPage;