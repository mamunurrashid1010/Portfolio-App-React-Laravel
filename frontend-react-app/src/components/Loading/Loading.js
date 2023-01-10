import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import loadingImage from '../../asset/image/loader.svg';

class Loading extends Component {
    render() {
        return (
            <Fragment>
                <Container className='text-center'>
                    <Row>
                        <Col>
                            <img className='loaderAnimation' src={loadingImage} />
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Loading;