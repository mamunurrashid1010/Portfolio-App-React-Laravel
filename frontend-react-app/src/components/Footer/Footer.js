import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ApiUrl from '../../restApi/ApiUrl';

class Footer extends Component {
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
                <Container fluid={true} className='footerSection'>
                    <Row>
                        <Col sm={12} md={6} lg={3} className='p-5'>
                            <h1 className='footerName'>Follow Me</h1>
                            <a href={"//"+this.state.data.facebook_link} target="_blank" className='socialLink'><FontAwesomeIcon icon={faFacebook} /> Facebook</a><br/>
                            <a href={"//"+this.state.data.youtube_link} target="_blank" className='socialLink'><FontAwesomeIcon icon={faYoutube} /> YouTube</a>
                        </Col>
                        <Col sm={12} md={6} lg={3} className='p-5'>
                            <h1 className='footerName'>Address</h1>
                            <p className='footerAddress'>{this.state.data.address}</p>
                            <p  className='footerAddress'><FontAwesomeIcon icon={faEnvelope} /> {this.state.data.email}</p>
                            <p  className='footerAddress'><FontAwesomeIcon icon={faPhone} /> {this.state.data.phone}</p>
                        </Col>
                        <Col sm={12} md={6} lg={3} className='p-5'>
                            <h1 className='footerName'>Information</h1>
                            <Link to="/about" className='footerLink'>About Me</Link><br/>
                            <a href='#' className='footerLink'>My Resume</a><br/>
                            <Link to="/contact" className='footerLink'>Contact Me</Link>
                        </Col>
                        <Col sm={12} md={6} lg={3} className='p-5'>
                            <h1 className='footerName'>Legal</h1>
                            <Link to="/refundPolicy" className='footerLink'>Refund Policy</Link><br/>
                            <Link to="/termsCondition" className='footerLink'>Terms & Condition</Link><br/>
                            <a href='#' className='footerLink'>Privacy Policy</a>
                        </Col>
                    </Row>
                </Container>
                <Container fluid={true} className='text-center copyWriteSection'>
                    <p>{this.state.data.footer_credit} </p>
                </Container>
            </Fragment>
        );
    }
}

export default Footer;