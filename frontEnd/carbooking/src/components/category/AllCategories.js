import React, { useState, useEffect } from 'react';
import { CardsContainer, Description, NameCategory, ProductCard, ProductCardImg,CantForRent, ViewMore } from "./AllCategories.styled";


const AllCategories = ({setCategory}) => {

  const [dataApi, setDataApi] = useState(null);
  
  useEffect(() => {
    const request = async () => {
      const response = await fetch("http://18.219.33.103:8080/categories");
      const result = await response.json();
      setDataApi(result);
    }
    request();
  }, []);


  return (
    <>
    
      <CardsContainer>
     
        {dataApi &&
          dataApi.map((item) => (
            <ProductCard key={item.id}>
              <ProductCardImg src={item.urlImage} alt={item.name} />
              <Description>
                <NameCategory>
                  <h3>{item.name}</h3>
                </NameCategory>
                <CantForRent>
                  <p>10 For rent</p>
                </CantForRent>
              </Description>
              <ViewMore onClick={() => setCategory(item.id)}>Ver mas</ViewMore>
            </ProductCard>
          ))}
      </CardsContainer>
    </>
  );
};

export default AllCategories;