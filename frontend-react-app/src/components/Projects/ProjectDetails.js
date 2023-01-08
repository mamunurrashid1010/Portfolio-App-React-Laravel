import React, { Component, Fragment } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import projectImage1 from '../../asset/image/Website-Mockup.webp';
import axios from 'axios';
import ApiUrl from '../../restApi/ApiUrl';
import parse from 'html-react-parser';

class ProjectDetails extends Component {
    constructor(props){
        super(props);
        this.state={
            id: this.props.id,
            data:[],
            description:"aadfdsfdsfdsf"
        }
    }
    componentDidMount(){
        axios.get(ApiUrl.getProjectDetailsUrl+this.state.id)
        .then(response=>{
            this.setState({data:response.data});
        })
        .catch(error=>{

        })
    }

    render() {
        return (
            <Fragment>
                <Container className='mt-5'>
                    <Row>
                        <Col sm={12} md={6} lg={6}>
                            <img src={this.state.data['image_one']} className='w-100' />
                        </Col>
                        <Col sm={12} md={6} lg={6}>
                            <h2 className='projectCardTitle'>{this.state.data['name']}</h2>
                            <p className='projectCardDes'>{this.state.data['description']}</p>
                            <ul className='projectCardDes'>
                                {this.state.data['feature']}
                            </ul>
                            <Button variant='primary'>Live Preview</Button>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default ProjectDetails;