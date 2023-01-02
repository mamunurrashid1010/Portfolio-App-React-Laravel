import React, { Component, Fragment } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import webDesign1 from '../../asset/image/webDesign1.png';
import webDesign2 from '../../asset/image/webDesign2.png';

class Courses extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                <h1 className='serviceTitle text-center'>COURSES</h1>
                    {/* row-1 */}
                    <Row>
                        <Col sm={12} md={12} lg={6} className='p-2'>
                            <Row>
                                <Col sm={12} md={6} lg={6}>
                                    <img src={webDesign1} className='courseImage' />
                                </Col>
                                <Col sm={12} md={6} lg={6}>
                                    <h5 className='courseTitle'>Web Design & Development</h5>
                                    <p className='courseDes'>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    </p>
                                    <Link to="/course/details/1"><Button className='btn btn-primary'>Details1</Button></Link>
                                </Col>
                            </Row>
                        </Col>
                        <Col sm={12} md={12} lg={6} className='p-2'>
                            <Row>
                                <Col sm={12} md={6} lg={6}>
                                    <img src={webDesign2} className='courseImage' />
                                </Col>
                                <Col sm={12} md={6} lg={6}>
                                    <h5 className='courseTitle'>Web Design & Development</h5>
                                    <p className='courseDes'>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    </p>
                                    <Link to="/course/details/1"><Button className='btn btn-primary'>Details</Button></Link>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    {/* row-2 */}
                    <Row>
                        <Col sm={12} md={12} lg={6} className='p-2'>
                            <Row>
                                <Col sm={12} md={6} lg={6}>
                                    <img src={webDesign2} className='courseImage' />
                                </Col>
                                <Col sm={12} md={6} lg={6}>
                                    <h5 className='courseTitle'>Web Design & Development</h5>
                                    <p className='courseDes'>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    </p>
                                    <Link to="/course/details/1"><Button className='btn btn-primary'>Details</Button></Link>
                                </Col>
                            </Row>
                        </Col>
                        <Col sm={12} md={12} lg={6} className='p-2'>
                            <Row>
                                <Col sm={12} md={6} lg={6}>
                                    <img src={webDesign1} className='courseImage' />
                                </Col>
                                <Col sm={12} md={6} lg={6}>
                                    <h5 className='courseTitle'>Web Design & Development</h5>
                                    <p className='courseDes'>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    </p>
                                    <Link to="/course/details/1"><Button className='btn btn-primary'>Details</Button></Link>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Courses;