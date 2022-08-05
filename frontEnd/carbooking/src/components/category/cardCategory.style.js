import styled from "styled-components";

//contenedor de todas las cartas
export const CardsContainer = styled.div`
  display: flex;
  background:white;
  width:100% ;
  height:280px;
  justify-content: space-between;
  place-content: center;
  margin-top: -20px;
  padding-top : 15px;

`;

//contenedor de cada carro

export const ProductCard = styled.div`
 width: 250px;
 height:270px;
 margin-right:20px;
 border-radius: 20px;
 box-shadow: 0px 5px 5px 0px #6A6B67;
 overflow: hidden;
background:white;
`;

export const ProductCardImg = styled.img`
  width: 300px;
  height: 180px;
  object-fit: cover;

`;

//contenedor de la descripcion
export const Description = styled.div`
  width: 150px;
  margin-top: 1px;
;

`;
export const NameCategory = styled.div`
font-weight: bold;
font-size: medium;
margin-left:5px;
height: 32px;
display:flex;
justify-content: flex-start
`;
export const CantForRent = styled.div`
height: 32px;
color: #31363F;
opacity: 0.6;
margin-left:5px;
display:flex;
justify-content: flex-start
`;


