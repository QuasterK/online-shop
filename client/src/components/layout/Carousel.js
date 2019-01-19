import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import '../../scss/Carousel-overrides.scss';

class MainCarousel extends Component {
    render() {
        return (
            <Carousel showThumbs={false} dynamicHeight={true} showStatus={false} infiniteLoop={true} stopOnHover={true} autoPlay={true}>
                <div>
                    <img src={require("../../images/carousel/watch1.jpeg")} alt="watch 1"/>
                </div>
                <div>
                    <img src={require("../../images/carousel/watch2.jpeg")} alt="watch 2" />
                </div>
                <div>
                    <img src={require("../../images/carousel/watch3.jpg")} alt="watch 3"/>
                </div>
            </Carousel>
        );
    }
}

export default MainCarousel;