import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';
import parse from 'html-react-parser';
import ApiUrl from '../../restApi/ApiUrl';

class TermsDescription extends Component {
    constructor(){
        super();
        this.state={
            description:"",
        }
    }

    componentDidMount(){
        axios.get(ApiUrl.getCommonLegalUrl)
        .then(response=>{
            this.setState({description:response.data[0]['terms']});
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

export default TermsDescription;