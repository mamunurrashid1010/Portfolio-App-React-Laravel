import React, { Component, Fragment } from 'react';
// silck css library import
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Col, Container, Row } from 'react-bootstrap';
import manPhoto from '../../asset/image/cartoon-photo.png';
import axios from 'axios';
import ApiUrl from '../../restApi/ApiUrl';

class ClientReview extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        axios.get(ApiUrl.getallClientReviewUrl)
        .then(response=>{
            this.setState({data:response.data});
        })
        .catch(error=>{

        })
    }

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

          // data mapping
        const reviewData = this.state.data;
        const dataView = reviewData.map(d=>{
            return <div>
                        <Row className='text-center justify-content-center'>
                            <Col sm={12} md={6} lg={6}>
                                <img className='clientImage' src={d.image} />
                                <h1 className='reviewName'>{d.name}</h1>
                                <p className='reviewDetails'>
                                    {d.description}
                                </p>
                            </Col>
                        </Row>
                    </div>
        })

        return (
            <Fragment>
                <Container>
                    <h1 className='serviceTitle text-center'>CLIENT REVIEW</h1>
                    <Slider {...settings}>
                        {dataView}
                    </Slider>
                </Container>
            </Fragment>
        );
    }
}

export default ClientReview;