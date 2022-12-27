import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

class Footer extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className='footerSection'>
                    <Row>
                        <Col sm={12} md={6} lg={3} className='p-5'>
                            <h1 className='footerName'>Follow Me</h1>
                            <a href='#' className='socialLink'><FontAwesomeIcon icon={faFacebook} /> Facebook</a><br/>
                            <a href='#' className='socialLink'><FontAwesomeIcon icon={faYoutube} /> YouTube</a>
                        </Col>
                        <Col sm={12} md={6} lg={3} className='p-5'>
                            <h1 className='footerName'>Address</h1>
                            <p className='footerAddress'>Chandgaon Residential Area, Chandgaon, Chittagong.</p>
                            <p  className='footerAddress'><FontAwesomeIcon icon={faEnvelope} /> mamunurrashid1010@gmail.com</p>
                            <p  className='footerAddress'><FontAwesomeIcon icon={faPhone} /> 1812985897</p>
                        </Col>
                        <Col sm={12} md={6} lg={3} className='p-5'>
                            <h1 className='footerName'>Information</h1>
                            <a href='#' className='footerLink'>About Me</a><br/>
                            <a href='#' className='footerLink'>My Resume</a><br/>
                            <a href='#' className='footerLink'>Contact Me</a>
                        </Col>
                        <Col sm={12} md={6} lg={3} className='p-5'>
                            <h1 className='footerName'>Legal</h1>
                            <a href='#' className='footerLink'>Refund Policy</a><br/>
                            <a href='#' className='footerLink'>Terms & Condition</a><br/>
                            <a href='#' className='footerLink'>Privacy Policy</a>
                        </Col>
                    </Row>
                </Container>
                <Container fluid={true} className='text-center copyWriteSection'>
                    <p>Mamunur Rashid &copy; 2023-2024 </p>
                </Container>
            </Fragment>
        );
    }
}

export default Footer;