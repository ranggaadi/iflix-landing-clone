import React from 'react'
import Slider from 'react-slick'
import CarouselItem from '../CarouselItem/CarouselItem'
import classes from './Carousel.module.css'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Carousel = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        dotsClass: classes.Dots,
        autoplaySpeed: 600000,
        autoplay:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    }

    return (
        <div className={classes.Carousel}>
            <Slider {...settings} >
                <CarouselItem trailer={true} imgSrc="https://iflix-images.akamaized.net/5f179b00e4b0a83e00a8b3d1_l_carousel-landscape-wide?transform=true&v=1&resize[0]=2400"/>
                <CarouselItem trailer={true} imgSrc="https://iflix-images.akamaized.net/5f179b00e4b0a83e00a8b3d1_l_carousel-landscape-wide?transform=true&v=1&resize[0]=2400"/>
                <CarouselItem trailer={true} imgSrc="https://iflix-images.akamaized.net/5f179b00e4b0a83e00a8b3d1_l_carousel-landscape-wide?transform=true&v=1&resize[0]=2400"/>
                <CarouselItem trailer={true} imgSrc="https://iflix-images.akamaized.net/5f179b00e4b0a83e00a8b3d1_l_carousel-landscape-wide?transform=true&v=1&resize[0]=2400"/>
                <CarouselItem trailer={true} imgSrc="https://iflix-images.akamaized.net/5f179b00e4b0a83e00a8b3d1_l_carousel-landscape-wide?transform=true&v=1&resize[0]=2400"/>
            </Slider>
        </div>
    )
}

export default Carousel