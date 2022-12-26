import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

class Analysis extends Component{
    constructor(){
        super();
        this.state={
            data:[
                { technology:'Php', projects:100},
                { technology:'Laravel', projects:80},
                { technology:'React', projects:60},
                { technology:'Node', projects:70},
                { technology:'Express', projects:80},
                { technology:'Mongodb', projects:50},
                { technology:'MySql', projects:90},
                { technology:'Bootstrap', projects:100},
            ],
        }
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
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br/><br/>
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            <br/><br/>
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </Col>

                    </Row>
                </Container>
            </Fragment> 
        );
    }
}
export default Analysis;