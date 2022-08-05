import React from 'react';
import Card from './Card';
import data from './data.json';
import {Conteiner} from "./Styles"


export default function List(){
    return (
        <Conteiner className="list-container">
            {data.map(elemnt => (
                <Card
                 key= {elemnt.id}
                 title= {elemnt.product.title}
                 img= {elemnt.product.img}
                 category= {elemnt.product.category}
                 location= {elemnt.product.location}
                 description= {elemnt.product.description}
                />
            ))}
        </Conteiner>
    );
}