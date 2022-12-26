import React, { Component, Fragment } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";

class TopBanner extends Component{
    render(){
        return(
            <Fragment>
                <Container fluid={true} className="topFixedBanner p-0">
                    <div className="topBannerOverlay">
                        <Container className="topBannerContent">
                            <Row>
                                <Col className="text-center">
                                    <h1 className="topBannerTitle">Hi, I am <span style={{color:'#ffa731'}}>Mamunur Rashid</span></h1>
                                    <h4 className="topBannerSubTitle">Software Engineer</h4>
                                    <Button variant="warning">More Info</Button>
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