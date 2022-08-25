import React, { useState, useEffect }from "react";
import { useParams} from 'react-router-dom'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ContainerSlider, ImgOne, ImgTwo, ImgThree, ImgFour, Parrafo } from "../../Modal/Slider/Slider.styles";
import { FaArrowCircleRight, FaArrowCircleLeft } from 'react-icons/fa';
import "../Slider/icons.css"

const Carousel = () =>{

    const NextArrow = ({ onClick }) => (
        <FaArrowCircleRight className="next" onClick={onClick}> </FaArrowCircleRight>
      );
      const PreviousArrow = ({ onClick }) => (
          <FaArrowCircleLeft className="prev" onClick={onClick}></FaArrowCircleLeft>
      );

      const { id } = useParams();
      const [imagenesProducto, setImagenesProducto] = useState(null);

      useEffect(() => {
        const request = async () => {
          const response = await fetch(`http://18.219.33.103:8080/products/${id}`);
          const result = await response.json();
          setImagenesProducto(result);
        }
        request();
      }, [id]);

    

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        cssEase: "linear",
        pauseOnHover: true,
        nextArrow: <NextArrow/>,
        prevArrow: <PreviousArrow/>,
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
         {imagenesProducto && imagenesProducto.map(imagenesCarrusel  => (
         <Slider {...settings}>
         <div>
           <ImgOne src={imagenesCarrusel.images[0].url} alt="IMAGENONE" />
           <Parrafo > 1 de 5 </Parrafo>
         </div>
         <div>
           <ImgTwo src={imagenesCarrusel.images[1].url} alt="IMAGETWO" />
           <Parrafo> 2 de 5 </Parrafo>
         </div>
         <div>
           <ImgThree src={imagenesCarrusel.images[2].url} alt="IMAGETHREE" />
           <Parrafo> 3 de 5 </Parrafo>
         </div>
         <div>
           <ImgFour src={imagenesCarrusel.images[3].url} alt="IMAGEFOUR" />
           <Parrafo> 4 de 5 </Parrafo>
         </div>
         <div>
           <ImgFour src={imagenesCarrusel.images[4].url} alt="IMAGEFOUR" />
           <Parrafo> 5 de 5 </Parrafo>
         </div>
         </Slider> ))}
        
            
    </ContainerSlider>

    );

}; 

export default Carousel; 