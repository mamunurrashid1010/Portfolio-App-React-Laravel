import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ApiUrl from '../../restApi/ApiUrl';
import axios from 'axios';
import parse from 'html-react-parser';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';

class AboutDescription extends Component {
    constructor(){
        super();
        this.state={
            description:"",
            loading: true,
            error: false,
        }
    }

    componentDidMount(){
        axios.get(ApiUrl.getCommonLegalUrl)
        .then(response=>{
            this.setState({description:response.data[0]['about'], loading:false, error:false});
        })
        .catch(error=>{
            this.setState({error:true,loading:false});
        })
    }
    render() {
        if(this.state.loading == true){
            return <Loading/>
        }
        else if(this.state.error == true){
            return <Error/>
        }
        else{
            return (
            <Fragment>
                <Container>
                    <Row>
                        <Col sm={12} md={12} lg={12} className="mt-5">
                            {parse(this.state.description)}
                        </Col>
                    </Row>
                </Container>
            </Fragment>
            );
        }
        
    }
}

export default AboutDescription;