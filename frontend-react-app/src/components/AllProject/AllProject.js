import React, { Component, Fragment } from 'react';
import { Col, Container, Row, Card, Button } from 'react-bootstrap';
import projectImage1 from '../../asset/image/Website-Mockup.webp';
import projectImage2 from '../../asset/image/website-mockup2.jpg';
import projectImage3 from '../../asset/image/admin-mockup3.webp';

class AllProject extends Component {
    render() {
        return (
            <Fragment>
                <Container className='mt-5'>
                    <Row>
                        <Col sm={12} md={6} lg={4}>
                            <Card className='projectCard text-center'>
                                <Card.Img variant="top" src={projectImage1} style={{height:'17rem'}} />
                                <Card.Body>
                                    <Card.Title className='projectCardTitle'>Multi Vendor Ecommerce App</Card.Title>
                                    <Card.Text className='projectCardDes'>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="outline-info w-100">Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={12} md={6} lg={4}>
                            <Card className='projectCard text-center'>
                                <Card.Img variant="top" src={projectImage2} style={{height:'17rem'}} />
                                <Card.Body>
                                    <Card.Title className='projectCardTitle'>Electronic Mart App</Card.Title>
                                    <Card.Text className='projectCardDes'>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="outline-info w-100">Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={12} md={6} lg={4}>
                            <Card className='projectCard text-center'>
                                <Card.Img variant="top" src={projectImage3} style={{height:'17rem'}} />
                                <Card.Body>
                                    <Card.Title className='projectCardTitle'>POS & Inventory App</Card.Title>
                                    <Card.Text className='projectCardDes'>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="outline-info w-100">Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm={12} md={6} lg={4}>
                            <Card className='projectCard text-center'>
                                <Card.Img variant="top" src={projectImage1} style={{height:'17rem'}} />
                                <Card.Body>
                                    <Card.Title className='projectCardTitle'>Multi Vendor Ecommerce App</Card.Title>
                                    <Card.Text className='projectCardDes'>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="outline-info w-100">Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={12} md={6} lg={4}>
                            <Card className='projectCard text-center'>
                                <Card.Img variant="top" src={projectImage2} style={{height:'17rem'}} />
                                <Card.Body>
                                    <Card.Title className='projectCardTitle'>Electronic Mart App</Card.Title>
                                    <Card.Text className='projectCardDes'>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="outline-info w-100">Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={12} md={6} lg={4}>
                            <Card className='projectCard text-center'>
                                <Card.Img variant="top" src={projectImage3} style={{height:'17rem'}} />
                                <Card.Body>
                                    <Card.Title className='projectCardTitle'>POS & Inventory App</Card.Title>
                                    <Card.Text className='projectCardDes'>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="outline-info w-100">Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default AllProject;