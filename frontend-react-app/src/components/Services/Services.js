import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import myIcon1 from '../../asset/image/programing2.png';
import myIcon2 from '../../asset/image/mobileapp.png';
import myIcon3 from '../../asset/image/computer.png';

class Services extends Component {
    render() {
        return (
            <Fragment>
                <Container className='text-center'>
                <h1 className='serviceTitle'>MY SERVICES</h1>
                    <Row>
                        <Col sm={12} md={6} lg={4}>
                            <div className='serviceCard text-center'>
                                <img src={myIcon1} />
                                <h4 className='serviceName'>Web App Development</h4>
                                <p className='serviceDetails'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                    when an unknown printer...
                                </p>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={4}>
                            <div className='serviceCard text-center'>
                                <img src={myIcon2} />
                                <h4 className='serviceName'>Rest API Development</h4>
                                <p className='serviceDetails'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                    when an unknown printer...
                                </p>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={4}>
                            <div className='serviceCard text-center'>
                                <img src={myIcon3} />
                                <h4 className='serviceName'>Web Design</h4>
                                <p className='serviceDetails'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                    when an unknown printer...
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Services;