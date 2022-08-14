import React from 'react';
import { ProductCard,ProductCardImg,Description,NameCategory,CantForRent } from '../category/cardCategory.style';
const Category = ({ title, image, stock }) =>{
    return (
        
        <ProductCard>
            <ProductCardImg src={image} alt="car" />
           <Description>
               <NameCategory>
                  <p>{title}</p>
               </NameCategory>

               <CantForRent>
                  <p>{stock} For rent</p>
               </CantForRent>
            
           </Description>   
        </ProductCard>
    );
}

export default Category