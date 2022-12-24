import React, { Component, Fragment } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import '../../asset/css/custom.css';

class TopBanner extends Component{
    render(){
        return(
            <Fragment>
                <Container fluid={true} className="topFixedBanner p-0">
                    <div className="topBannerOverlay">
                        <Container className="topBannerContent">
                            <Row>
                                <Col className="text-center">
                                    <h1 className="topBannerTitle">Software Engineer</h1>
                                    <h4 className="topBannerSubTitle">Web App & Rest API Development</h4>
                                    <Button variant="primary">More Info</Button>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default TopBanner;