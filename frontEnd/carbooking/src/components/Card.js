import React from 'react';
import {Cards, Image} from "./Styles"

export default function Card({title, img, category, location, description}) {
    return(
        <Cards className="card-container">
            <Image src={img} alt="Img"/>
            
            <article>
            <h2>{title}</h2>
            <h3>{category}</h3>
            <p>{location}</p>
            <p>{description}</p>
            <button> Ver más </button>
            </article>
           
        </Cards>
    );
}