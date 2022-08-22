import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import adelante from "../../../img/imgCarousel/adelante.jpg";
import asientos from "../../../img/imgCarousel/asientos.jpg";
import sistema from "../../../img/imgCarousel/sistema.jpg";
import parteAtras from "../../../img/imgCarousel/parteAtras.jpg";

import { ContainerSlider, ImgOne, ImgTwo, ImgThree, ImgFour, } from "../../Modal/Slider/Slider.styles";

const Carousel = () =>{

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        cssEase: "linear",
        pauseOnHover: true,
        nextArrow: <div />,
        prevArrow: <div />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              autoplay: true,
              autoplaySpeed: 3000,
              cssEase: "linear",
              pauseOnHover: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
              infinite: true,
              dots: true,
              autoplay: true,
              autoplaySpeed: 3000,
              cssEase: "linear",
              pauseOnHover: true,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              autoplay: true,
              autoplaySpeed: 3000,
              cssEase: "linear",
              pauseOnHover: true,
            },
          },
          {
            breakpoint: 280,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              autoplay: true,
              autoplaySpeed: 3000,
              cssEase: "linear",
              pauseOnHover: true,
            },
          },
          {
            breakpoint: 180,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              autoplay: true,
              autoplaySpeed: 3000,
              cssEase: "linear",
              pauseOnHover: true,
            },
          },

        ],
      };

    return(

        <ContainerSlider>
            <Slider {...settings}>
        <div>
          <ImgOne src={adelante} alt="IMAGENONE" />
        </div>
        <div>
          <ImgTwo src={asientos} alt="IMAGETWO" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <ImgThree src={sistema} alt="IMAGETHREE" />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <ImgFour src={parteAtras} alt="IMAGEFOUR" />
        </div>
        </Slider>
    </ContainerSlider>

    );

}; 

export default Carousel; 