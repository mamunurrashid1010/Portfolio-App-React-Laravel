import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import webDesign1 from '../../asset/image/webDesign1.png';
import webDesign2 from '../../asset/image/webDesign2.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ApiUrl from '../../restApi/ApiUrl';

class AllCourses extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        axios.get(ApiUrl.getAllCoursetUrl)
        .then(response=>{
            this.setState({data:response.data});
        })
        .catch(error=>{

        })
    }

    render() {
        // data mapping
        const courseData = this.state.data;
        const dataView = courseData.map(d=>{
            return <Col sm={12} md={12} lg={6} className='p-2'>
                        <Row>
                            <Col sm={12} md={6} lg={6}>
                                <img src={d.image} className='courseImage' />
                            </Col>
                            <Col sm={12} md={6} lg={6}>
                                <h5 className='courseTitle'>{d.name}</h5>
                                <p className='courseDes'>
                                    {d.short_description}
                                </p>
                                <Link to={'/course/details/'+d.id}><Button className='btn btn-primary'>Details</Button></Link>
                            </Col>
                        </Row>
                    </Col>
        })

        return (
            <Fragment>
                <Container className='mt-5'>
                {/* <h1 className='serviceTitle text-center'>COURSES</h1> */}
                   
                    <Row>
                        {dataView}
                    </Row>

                </Container>
            </Fragment>
        );
    }
}

export default AllCourses;