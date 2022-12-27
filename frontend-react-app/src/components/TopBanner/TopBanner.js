import React, { Component, Fragment } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";

class TopBanner extends Component{
    render(){
        return(
            <Fragment>
                <Container fluid={true} className="topFixedBanner p-0">
                    <div className="topBannerOverlay">
                        <Container className="topBannerContent">
                            <Row>
                                <Col className="text-center">
                                    <h1 className="topBannerTitle">Hi, I am <span style={{color:'#ffa731'}}>Mamunur Rashid</span>
                                    </h1>
                                    
                                    <h4 className="topBannerSubTitle">
                                        <TypeAnimation
                                                // Same String at the start will only be typed once, initially
                                                sequence={[
                                                'Software Engineer', 1000,
                                                'Full Stack Web Developer', 1000,
                                                'Rest API Developer', 1000,
                                                ]}
                                                speed={1} // Custom Speed from 1-99 - Default Speed: 40
                                                wrapper="span" // Animation will be rendered as a <span>
                                                repeat={Infinity} // Repeat this Animation Sequence infinitely
                                        />
                                    </h4>
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