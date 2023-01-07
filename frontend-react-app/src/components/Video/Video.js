import React, { Component, Fragment } from 'react';
import { Col, Container, Row, Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import 'video-react/dist/video-react.css';
import { Player,BigPlayButton } from 'video-react';
import axios from 'axios';
import ApiUrl from '../../restApi/ApiUrl';

class Video extends Component {
    constructor(){
        super();
        this.state={
            show:false,
            data:[],
        }
    }
    componentDidMount(){
        axios.get(ApiUrl.getVideoContenetUrl)
        .then(response=>{
            this.setState({data:response.data});
        })
        .catch(error=>{

        })
    }

    modalClose=()=>this.setState({show:false});
    modalOpen=()=>this.setState({show:true});

    render() {
        return (
            <Fragment>
                <Container className='text-center'>
                    <Row>
                        <Col sm={12} md={12} lg={12} className='VideoCard'>
                            <div>
                                <p className='videoTitle'>{this.state.data.video_title}</p>
                                <p className='videoDes'>
                                    {this.state.data.video_description}
                                </p>
                                <p>
                                    <FontAwesomeIcon icon={faPlayCircle} className='playButton' onClick={this.modalOpen} />
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>

                {/* video modal */}
                <Modal size='lg' show={this.state.show} onHide={this.modalClose}>
                    <Modal.Header closeButton>
                    </Modal.Header>
                    <Modal.Body>
                        <Player>
                            <source src={this.state.data.video_url} />
                            <BigPlayButton position='center'/>
                        </Player>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="danger" onClick={this.modalClose}>
                        Close
                    </Button>
                    </Modal.Footer>
                </Modal>

            </Fragment>
        );
    }
}

export default Video;