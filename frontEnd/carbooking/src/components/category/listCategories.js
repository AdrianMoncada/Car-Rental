import React from 'react';
import Category from './category';
import dataCategories from '../../resources/dataCategories.json'
import { CardsContainer } from '../category/cardCategory.style';

const CardCategories = () => {
  return (
     <CardsContainer>
         {
             dataCategories.map(product =>(
                 <Category
                 key={product.id}
                 image ={product.product.image}
                 title = {product.product.title}
                 stock ={product.stock}
                 />
             ))
         }

     </CardsContainer>
  
  )
}

export default CardCategories