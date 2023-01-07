import React, { Component, Fragment } from 'react';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import ApiUrl from '../../restApi/ApiUrl';

class ContactSection extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        axios.get(ApiUrl.getFooterContentUrl)
        .then(response=>{
            this.setState({data:response.data});
        })
        .catch(error=>{

        })
    }

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
                            <p  className='serviceDetails'>{this.state.data.address}</p>
                            <p  className='serviceDetails'><FontAwesomeIcon icon={faEnvelope} /> {this.state.data.email}</p>
                            <p  className='serviceDetails'><FontAwesomeIcon icon={faPhone} /> {this.state.data.phone}</p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default ContactSection;