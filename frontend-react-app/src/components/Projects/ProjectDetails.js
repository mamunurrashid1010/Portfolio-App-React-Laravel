import React, { Component, Fragment } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import projectImage1 from '../../asset/image/Website-Mockup.webp';

class ProjectDetails extends Component {
    render() {
        return (
            <Fragment>
                <Container className='mt-5'>
                    <Row>
                        <Col sm={12} md={6} lg={6}>
                            <img src={projectImage1} />
                        </Col>
                        <Col sm={12} md={6} lg={6}>
                            <h2 className='projectCardTitle'>Multi Vendor Ecommerce App</h2>
                            <p className='projectCardDes'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <ul className='projectCardDes'>
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
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default ProjectDetails;