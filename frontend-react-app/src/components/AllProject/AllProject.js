import React, { Component, Fragment } from 'react';
import { Col, Container, Row, Card, Button } from 'react-bootstrap';
import projectImage1 from '../../asset/image/Website-Mockup.webp';
import projectImage2 from '../../asset/image/website-mockup2.jpg';
import projectImage3 from '../../asset/image/admin-mockup3.webp';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ApiUrl from '../../restApi/ApiUrl';
import Loading from '../Loading/Loading';

class AllProject extends Component {
    constructor(){
        super();
        this.state={
            data:[],
            loading: true,
        }
    }
    componentDidMount(){
        axios.get(ApiUrl.getAllProjectUrl)
        .then(response=>{
            this.setState({data:response.data, loading:false});
        })
        .catch(error=>{

        })
    }

    render() {
        // data mapping
        const projectData = this.state.data;
        const dataView = projectData.map(d=>{
            return <Col sm={12} md={6} lg={4}>
                        <Card className='projectCard text-center'>
                            <Card.Img variant="top" src={d.image_one} style={{height:'17rem'}} />
                            <Card.Body>
                                <Card.Title className='projectCardTitle'>{d.name}</Card.Title>
                                <Card.Text className='projectCardDes'>
                                    {d.description}
                                </Card.Text>
                                <Button variant="outline-info w-100"><Link to={'/project/details/'+d.id} className='projectDetailsButton'>Details</Link></Button>
                            </Card.Body>
                        </Card>
                    </Col>
        })

        if(this.state.loading == true){
            return <Loading/>;
        }
        else{
            return (
            <Fragment>
                <Container className='mt-5'>
                    <Row>
                        {dataView}
                    </Row>
                </Container>
            </Fragment>
            );
        }
    }
        
}

export default AllProject;