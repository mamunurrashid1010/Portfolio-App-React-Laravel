import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

class Summary extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="summaryBanner mt-5 p-0">
                    <div className="summaryOverlay">
                        <Container className='text-center'>
                            <Row>
                                <Col sm={12} md={6} lg={8}>
                                    <Row className='countSection'>
                                        <Col>
                                            <h1 className='countNumber'>
                                                <CountUp start={0} end={100}>
                                                    {({ countUpRef, start }) => (
                                                        <VisibilitySensor onChange={start}>
                                                            <span ref={countUpRef} />
                                                        </VisibilitySensor>
                                                    )}
                                                </CountUp>
                                            </h1>
                                            <h4 className='countTitle'>Total Projects</h4>
                                        </Col>
                                        <Col>
                                            <h1 className='countNumber'>
                                            <CountUp start={0} end={60}>
                                                    {({ countUpRef, start }) => (
                                                        <VisibilitySensor onChange={start}>
                                                            <span ref={countUpRef} />
                                                        </VisibilitySensor>
                                                    )}
                                                </CountUp>
                                            </h1>
                                            <h4 className='countTitle'>Total Clients</h4>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col sm={12} md={6} lg={4}>
                                    <Card className='summaryCard'>
                                        <Card.Body>
                                            <Card.Title className='summaryCardTitle'>How i Work</Card.Title>
                                            <Card.Text className='summaryCardSubTitle'>
                                                <p><FontAwesomeIcon icon={faCheckCircle} className='summaryIcon' /> Requirement Gathering</p>
                                                <p><FontAwesomeIcon icon={faCheckCircle} className='summaryIcon' /> System Analysis</p>
                                                <p><FontAwesomeIcon icon={faCheckCircle} className='summaryIcon' /> Coding Testing</p>
                                                <p><FontAwesomeIcon icon={faCheckCircle} className='summaryIcon' /> Implementation</p>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                             
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default Summary;