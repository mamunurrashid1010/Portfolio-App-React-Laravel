import axios from "axios";
import React, { Component, Fragment } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";
import ApiUrl from "../../restApi/ApiUrl";
import Loading from '../Loading/Loading';

class TopBanner extends Component{
    constructor(){
        super();
        this.state={
            title:"",
            subTitle:"",
            loadingClass: "d-none",
            loadingImage:"",
        }
    }
    componentDidMount(){
        axios.get(ApiUrl.topBannerContent)
        .then(response=>{
            this.setState({title:response.data['title'], subTitle:response.data['sub_title'], loadingClass:"", loadingImage:"d-none"});
        })
        .catch(error=>{
            this.setState({title:'---', subTitle:'----'});
        })
    }
    render(){
        return(
            <Fragment>
                <Container fluid={true} className="topFixedBanner p-0">
                    <div className="topBannerOverlay">
                        <Container className="topBannerContent">
                            <Row>
                                <Col className={this.state.loadingImage}>
                                    <Loading/>
                                </Col>
                            </Row>
                            <Row className={this.state.loadingClass}>
                                <Col className="text-center">
                                    <h1 className="topBannerTitle">Hi, I am <span style={{color:'#ffa731'}}>{this.state.title}</span></h1>
                                    
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