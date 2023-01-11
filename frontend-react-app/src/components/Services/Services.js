import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import myIcon1 from '../../asset/image/programing2.png';
import myIcon2 from '../../asset/image/mobileapp.png';
import myIcon3 from '../../asset/image/computer.png';
import axios from 'axios';
import ApiUrl from '../../restApi/ApiUrl';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';

class Services extends Component {
    constructor(){
        super();
        this.state={
            data:[],
            loading: true,
            error: false,
        }
    }
    componentDidMount(){
        axios.get(ApiUrl.serviceUrl)
        .then(response=>{
            this.setState({data:response.data, loading:false, error:false});
        })
        .catch(error=>{
            this.setState({error:true,loading:false});
        })
    }

    render() {
        // data mapping
        const serviceData = this.state.data;
        const dataView = serviceData.map(d=>{
            return <Col sm={12} md={6} lg={4}>
            <div className='serviceCard text-center'>
                <img src={d.image} />
                <h4 className='serviceName'>{d.name}</h4>
                <p className='serviceDetails'>{d.description}</p>
            </div>
        </Col>
        });

        if(this.state.loading == true){
            return <Loading/>;
        }
        else if(this.state.error == true){
            return <Error/>
        }
        else{
           return (
            <Fragment>
                <Container className='text-center'>
                    <h1 className='serviceTitle'>MY SERVICES</h1>
                    <Row>
                        {dataView}
                    </Row>
                </Container>
            </Fragment>
            ); 
        }
        
    }
}

export default Services;