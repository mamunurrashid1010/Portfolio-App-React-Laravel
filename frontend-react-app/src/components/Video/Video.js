import React, { Component, Fragment } from 'react';
import { Col, Container, Row, Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import 'video-react/dist/video-react.css';
import { Player,BigPlayButton } from 'video-react';

class Video extends Component {
    constructor(){
        super();
        this.state={
            show:false,
        }
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
                                <p className='videoTitle'>How I Do</p>
                                <p className='videoDes'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
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
                            <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
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