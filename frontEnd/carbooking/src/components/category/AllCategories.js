import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CardsContainer, Description, NameCategory, ProductCard, ProductCardImg,CantForRent, ViewMore } from "./AllCategories.styled";


const AllCategories = () => {

  const [dataApi, setDataApi] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const request = async () => {
      const response = await fetch(" http://api-cors.ca-central-1.elasticbeanstalk.com/categories");
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
              <ProductCardImg src={item.urlImage} alt={item.title} />
              <Description>
                <NameCategory>
                  <h3>{item.title}</h3>
                </NameCategory>
                <CantForRent>
                  <p>10 For rent</p>
                </CantForRent>
              </Description>
              <ViewMore onClick={() => navigate(`/home/filter/${item.id}`)}>Ver mas</ViewMore>
            </ProductCard>
          ))}
      </CardsContainer>
    </>
  );
};

export default AllCategories;