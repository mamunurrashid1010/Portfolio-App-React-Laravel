import React, { Component, Fragment } from 'react';
import { Row, Col, Container, Button } from "react-bootstrap";
import 'video-react/dist/video-react.css';
import { Player,BigPlayButton } from 'video-react';
import parse from 'html-react-parser'
import axios from 'axios';
import ApiUrl from '../../restApi/ApiUrl';

class CourseDetails extends Component {
    constructor(props){
        super(props);
        this.state={
            courseId: this.props.courseId,
            data:[],
        }
    }
    componentDidMount(){
        window.scroll(0,0);

        axios.get(ApiUrl.getCourseDetailsUrl+this.state.courseId)
        .then(response=>{
            this.setState({data:response.data});
        })
        .catch(error=>{

        })
    }

    render() {
        return (
            <Fragment>
                {/* top section */}
                <Container fluid={true} className="topFixedBanner_otherPage p-0">
                    <div className="topBannerOverlay__otherPage">
                        <Container className="topBannerContent__CourseDetailsPage">
                            <Row>
                                <Col sm={12} md={6} lg={6}>
                                    <h3 className='courseTitle_CourseDetailsPage'>{this.state.data['name']}</h3>
                                    <h5 className='courseSubTitle_CourseDetailsPage'>Total Lecture = {this.state.data['total_lecture']}</h5>
                                    <h5 className='courseSubTitle_CourseDetailsPage'>Total Student = {this.state.data['total_student']}</h5>
                                </Col>
                                <Col sm={12} md={6} lg={6}>
                                    <p className='courseDes_CourseDetailsPage'>
                                        {this.state.data['short_description']}
                                    </p>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>

                {/* body section */}
                <Container className='mt-5'>
                    <Row>
                        <Col sm={12} md={6} lg={6}>
                            <h1 className='courseBodyTitle_CourseDetailsPage'>Skill you get</h1>
                            <ul className='courseBodyDes_CourseDetailsPage'>
                                {this.state.data['long_description']}
                            </ul>
                            <Button variant='primary' href={"//"+this.state.data['courses_link']} target="_blank" >Live Preview</Button>
                        </Col>
                        <Col sm={12} md={6} lg={6}>
                            <Player>
                                <source src={this.state.data['video_url']}  />
                                <BigPlayButton position='center'/>
                            </Player>
                        </Col>
                    </Row>
                </Container>

            </Fragment>
        );
    }
}

export default CourseDetails;