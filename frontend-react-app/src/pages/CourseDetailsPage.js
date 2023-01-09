import React, { Component, Fragment } from 'react';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import Footer from '../components/Footer/Footer';
import CourseDetails from '../components/Courses/CourseDetails';

class CourseDetailsPage extends Component {
    constructor(){
        super();
        this.state={
            courseId: window.location.href.split('/')[5],
        }
    }

    render() {
        return (
            <Fragment>
                <TopNavigation title="Course Details"/>
                <CourseDetails courseId={this.state.courseId} />
                <Footer/>
            </Fragment>
        );
    }
}

export default CourseDetailsPage;