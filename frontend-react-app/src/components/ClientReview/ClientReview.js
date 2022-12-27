import React, { Component, Fragment } from 'react';
// silck css library import
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Col, Container, Row } from 'react-bootstrap';
import manPhoto from '../../asset/image/cartoon-photo.png';

class ClientReview extends Component {
    render() {

        var settings = {
            autoplay:true, //for autoplay
            autoplaySpeed:2000, //for autoplay
            vertical:true, //scroll vertically 
            verticalSwiping:true, //scroll vertically 
            dots: true,
            infinite: true,
            speed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1,
            //initialSlide: 0,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: 1
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          };

        return (
            <Fragment>
                <Container>
                    <h1 className='serviceTitle text-center'>CLIENT REVIEW</h1>
                    <Slider {...settings}>
                        {/* slider 1 */}
                        <div>
                            <Row className='text-center justify-content-center'>
                                <Col sm={12} md={6} lg={6}>
                                    <img className='clientImage' src={manPhoto} />
                                    <h1 className='reviewName'>Web Development</h1>
                                    <p className='reviewDetails'>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </p>
                                </Col>
                            </Row>
                        </div>

                        {/* slider 2 */}
                        <div>
                            <Row className='text-center justify-content-center'>
                                <Col sm={12} md={6} lg={6}>
                                    <img className='clientImage' src={manPhoto} />
                                    <h1 className='reviewName'>Web Development</h1>
                                    <p className='reviewDetails'>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </p>
                                </Col>
                            </Row>
                        </div>

                        {/* slider 3 */}
                        <div>
                            <Row className='text-center justify-content-center'>
                                <Col sm={12} md={6} lg={6}>
                                    <img className='clientImage' src={manPhoto} />
                                    <h1 className='reviewName'>Web Development</h1>
                                    <p className='reviewDetails'>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </p>
                                </Col>
                            </Row>
                        </div>

                    </Slider>
                </Container>
            </Fragment>
        );
    }
}

export default ClientReview;