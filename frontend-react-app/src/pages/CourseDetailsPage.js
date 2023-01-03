import React, { Component, Fragment } from 'react';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import Footer from '../components/Footer/Footer';
import CourseDetails from '../components/Courses/CourseDetails';

class CourseDetailsPage extends Component {
    componentDidMount(){
        window.scroll(0,0);
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Course Details"/>
                <CourseDetails/>
                <Footer/>
            </Fragment>
        );
    }
}

export default CourseDetailsPage;