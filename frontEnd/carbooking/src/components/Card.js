import React from 'react';
import {Cards, Image, Button, Information, ButtonContainer, ImageContainer, HeartContainer} from "./Styles";
import {FaCar, FaDesktop, FaWifi, FaHeart} from 'react-icons/fa';

export default function Card({title, img, category, location, description}) {
    return(
        <Cards className="card-container">
            
            <ImageContainer>
                <Image src={img} alt="Img"/>
            </ImageContainer>
            <Information>
                 <HeartContainer> <FaHeart style= {{fontSize: '30px'}}/> </HeartContainer>
                <h3>{category}</h3>
                <h2>{title}</h2>
                <div> <FaCar /> <FaDesktop/> <FaWifi/> </div>
                <p>{location}</p>
                <p>{description}</p>
                <ButtonContainer>
                    <Button> Ver más </Button>
                </ButtonContainer>
            </Information>
           
        </Cards>
    );
}