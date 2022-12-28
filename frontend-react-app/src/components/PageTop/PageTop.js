import React, { Component, Fragment } from 'react';
import { Row, Col, Container, Button } from "react-bootstrap";

class PageTop extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="topFixedBanner_otherPage p-0">
                    <div className="topBannerOverlay__otherPage">
                        <Container className="topBannerContent__otherPage">
                            <Row>
                                <Col className="text-center">
                                    <h4 className="topBannerTitle__otherPage">{this.props.pageTitle}</h4>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default PageTop;