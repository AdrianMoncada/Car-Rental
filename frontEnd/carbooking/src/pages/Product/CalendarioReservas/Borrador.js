import React from 'react';
import Card from './Card';
import data from '../resources/data.json';
import {Conteiner} from "./Styles"


export default function List({city}){
    const productsRandom = data
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value)
      
    return (
        <Conteiner className="list-container">
            {productsRandom.map(elemnt => {
                    return city=="" || city==elemnt.product.location ? 
                        <Card
                        key= {elemnt.id}
                        title= {elemnt.product.title}
                        img= {elemnt.product.img}
                        category= {elemnt.product.category}
                        location= {elemnt.product.location}
                        description= {elemnt.product.description}
                        />
                    :
                    <span></span>
                }
            )}
        </Conteiner>
    );
}