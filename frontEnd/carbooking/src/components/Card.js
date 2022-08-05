import React from 'react';
import {Cards, Image, Button, Information, ButtonContainer, ImageContainer} from "./Styles"

export default function Card({title, img, category, location, description}) {
    return(
        <Cards className="card-container">
            
            <ImageContainer>
            <Image src={img} alt="Img"/>
            </ImageContainer>

            <Information>
            <h3>{category}</h3>
            <h2>{title}</h2>
            <p>{location}</p>
            <p>{description}</p>
            <ButtonContainer>
            <Button> Ver más </Button>
            </ButtonContainer>
            </Information>
           
        </Cards>
    );
}