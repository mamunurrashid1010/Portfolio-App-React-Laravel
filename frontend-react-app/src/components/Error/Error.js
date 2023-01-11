import React, { Component,Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import errorImage from '../../asset/image/error.png';

class Error extends Component {
    render() {
        return (
            <Fragment>
                <Container className='text-center p-5'>
                    <Row>
                        <Col>
                            <img className='loaderAnimation' src={errorImage} />
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Error;