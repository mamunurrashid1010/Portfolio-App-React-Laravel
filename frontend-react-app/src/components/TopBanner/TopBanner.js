import React, { Component, Fragment } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import '../../asset/css/custom.css';

class TopBanner extends Component{
    render(){
        return(
            <Fragment>
                <Container fluid={true} className="topFixedBanner">
                    <div className="topBannerOverlay">
                        <Container className="topBannerContent">
                            <Row>
                                <Col>
                                    <h1 className="topBannerTitle">Software Engineer</h1>
                                    <h4 className="topBannerSubTitle">Web Application Development</h4>
                                    {/* <Button variant="outline-primary">More Info</Button> */}
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