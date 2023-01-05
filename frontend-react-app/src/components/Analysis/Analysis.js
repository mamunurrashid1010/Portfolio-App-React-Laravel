import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios';
import ApiUrl from '../../restApi/ApiUrl'
import parse from 'html-react-parser';

class Analysis extends Component{
    constructor(){
        super();
        this.state={
            data:[],
            description:"",
            // data:[
            //     { technology:'Php', projects:100},
            //     { technology:'Laravel', projects:80},
            //     { technology:'React', projects:60},
            //     { technology:'Node', projects:70},
            //     { technology:'Express', projects:80},
            //     { technology:'Mongodb', projects:50},
            //     { technology:'MySql', projects:90},
            //     { technology:'Bootstrap', projects:100},
            // ],
        }
    }
    componentDidMount(){
        // technology chart data
        axios.get(ApiUrl.technologyChartDataUrl)
        .then(response=>{
            this.setState({data:response.data});
        })
        .catch(error=>{

        })

        // technology description data
        axios.get(ApiUrl.technologyDesUrl)
        .then(response=>{
            this.setState({description:response.data['technology_description']});
        })
        .catch(error=>{

        })
    }

    render(){
        return(
            <Fragment>
                <Container className="text-center">
                    <h1 className='serviceTitle'>TECHNOLOGY USED</h1>
                    <Row>

                        <Col sm={12} md={12} lg={6}>
                            <ResponsiveContainer>
                                <BarChart width={100} height={300} data={this.state.data}>
                                    <XAxis dataKey="technology" />
                                    <Tooltip />
                                    <Bar dataKey="projects" fill="#8884d8" />
                                </BarChart>
                            </ResponsiveContainer>
                        </Col>

                        <Col sm={12} md={12} lg={6}>
                            <p className="analysisDetails">
                                {parse(this.state.description)}
                            </p>
                        </Col>

                    </Row>
                </Container>
            </Fragment> 
        );
    }
}
export default Analysis;