import React from 'react';
import Category from './category';
import dataCategories from '../../resources/dataCategories.json'
import { CardsContainer,Title} from '../category/cardCategory.style';

const CardCategories = () => {
  return (
     <CardsContainer>
            <Title>
              <h1>Busqueda por categoria</h1>
            </Title>  
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