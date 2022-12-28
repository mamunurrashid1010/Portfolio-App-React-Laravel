import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

class AboutDescription extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col sm={12} md={12} lg={12} className="mt-5">
                            <h1 className='serviceName'>Who i Am</h1>
                            <hr/>
                            <p className='serviceDetails'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>

                            <h1 className='serviceName'>My Mission</h1>
                            <hr/>
                            <p className='serviceDetails'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>

                            <h1 className='serviceName'>My Vision</h1>
                            <hr/>
                            <p className='serviceDetails'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default AboutDescription;