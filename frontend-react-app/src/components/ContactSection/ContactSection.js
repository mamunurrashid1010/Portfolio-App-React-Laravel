import React, { Component, Fragment } from 'react';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

class ContactSection extends Component {
    render() {
        return (
            <Fragment>
                <Container className='mt-5'>
                    <Row>
                        <Col sm={12} md={6} lg={6}>
                            <h1 className='serviceName'>Quick Connect</h1>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label className='formTitle'>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter name" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label className='formTitle'>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label className='formTitle'>Message</Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Col>

                        <Col sm={12} md={6} lg={6}>
                            <h1 className='serviceName'>Discuss Now</h1>
                            <p  className='serviceDetails'>Chandgaon Residential Area, Chandgaon, Chittagong.</p>
                            <p  className='serviceDetails'><FontAwesomeIcon icon={faEnvelope} /> mamunurrashid1010@gmail.com</p>
                            <p  className='serviceDetails'><FontAwesomeIcon icon={faPhone} /> 1812985897</p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default ContactSection;