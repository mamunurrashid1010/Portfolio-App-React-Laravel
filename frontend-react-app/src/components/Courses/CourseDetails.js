import React, { Component, Fragment } from 'react';
import { Row, Col, Container, Button } from "react-bootstrap";
import 'video-react/dist/video-react.css';
import { Player,BigPlayButton } from 'video-react';

class CourseDetails extends Component {
    render() {
        return (
            <Fragment>
                {/* top section */}
                <Container fluid={true} className="topFixedBanner_otherPage p-0">
                    <div className="topBannerOverlay__otherPage">
                        <Container className="topBannerContent__CourseDetailsPage">
                            <Row>
                                <Col sm={12} md={6} lg={6}>
                                    <h3 className='courseTitle_CourseDetailsPage'>Web Design & Development</h3>
                                    <h5 className='courseSubTitle_CourseDetailsPage'>Total Lecture = 90</h5>
                                    <h5 className='courseSubTitle_CourseDetailsPage'>Total Student = 15</h5>
                                </Col>
                                <Col sm={12} md={6} lg={6}>
                                    <p className='courseDes_CourseDetailsPage'>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.
                                    </p>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>

                {/* body section */}
                <Container className='mt-5'>
                    <Row>
                        <Col sm={12} md={6} lg={6}>
                            <h1 className='courseBodyTitle_CourseDetailsPage'>Skill you get</h1>
                            <ul className='courseBodyDes_CourseDetailsPage'>
                                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                            </ul>
                            <Button variant='primary'>Live Preview</Button>
                        </Col>
                        <Col sm={12} md={6} lg={6}>
                            <Player>
                                <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                                <BigPlayButton position='center'/>
                            </Player>
                        </Col>
                    </Row>
                </Container>

            </Fragment>
        );
    }
}

export default CourseDetails;