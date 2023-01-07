import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ApiUrl from '../../restApi/ApiUrl';
import axios from 'axios';
import parse from 'html-react-parser';

class AboutDescription extends Component {
    constructor(){
        super();
        this.state={
            description:"",
        }
    }

    componentDidMount(){
        axios.get(ApiUrl.getCommonLegalUrl)
        .then(response=>{
            this.setState({description:response.data[0]['about']});
        })
        .catch(error=>{

        })
    }
    render() {
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

export default AboutDescription;