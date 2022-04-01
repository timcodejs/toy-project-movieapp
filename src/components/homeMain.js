import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const HomeMain = () => {
    const movieState = useSelector((state) => state.movie);

    return(
        <Slider {...settings}>
            {movieState.map((item, index) => (
                <div key={index}>
                    <div>
                        <img src={item.poster} alt="영화 포스터" /> 
                        <span>{item.title}</span>
                    </div>
                </div>
            ))}
        </Slider>
    )
}

export default HomeMain;

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px'
};
