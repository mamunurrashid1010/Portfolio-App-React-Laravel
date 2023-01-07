import React, { Component, Fragment } from 'react';
import { Col, Container, Row, Form, Button, Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import ApiUrl from '../../restApi/ApiUrl';

class ContactSection extends Component {
    constructor(){
        super();
        this.state={
            data:[],
            contactSendNotification:"",
            alertMessage:"d-none",
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

    // contact send
    sendContactInfo=()=>{
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;
        var data={
                'name': name,
                'email': email,
                'message': message,
        };

        axios.post(ApiUrl.postContactInfoUrl,data)
        .then(response=>{
            this.setState({contactSendNotification:response.data.message, alertMessage:""});
        })
        .catch(error=>{
            this.setState({contactSendNotification:"Fail!", alertMessage:""})
        })
    }

    render() {
        return (
            <Fragment>
                <Container className='mt-5'>
                    <Row>
                        <Col sm={12} md={6} lg={6}>
                            <div className={this.state.alertMessage}><Alert className='alert alert-info'>{this.state.contactSendNotification}</Alert></div>
                            <h1 className='serviceName'>Quick Connect</h1>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label className='formTitle'>Name</Form.Label>
                                    <Form.Control id="name" type="text" placeholder="Enter name" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label className='formTitle'>Email address</Form.Label>
                                    <Form.Control id="email" type="email" placeholder="Enter email" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label className='formTitle'>Message</Form.Label>
                                    <Form.Control id="message" as="textarea" rows={3} />
                                </Form.Group>
                                <Button variant="primary" onClick={this.sendContactInfo}>
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