import styled from "styled-components";
//contenedor de todas las cartas
export const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height:500px;
  background-image: url(https://images.unsplash.com/photo-1520560387605-de260bb65250?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80);
  background-size: cover;
  background-repeat: no-repeat;
  justify-content: space-between;
  align-items: center;
  margin-top: -20px;
  overflow: hidden;
  padding-top : 14px;

  @media (max-width: 667px) {
    flex-direction: column;
    height: 100%;
    justify-content: center;
    align-items: center;
    }

`;

//contenedor de cada carro

export const ProductCard = styled.div`
 width: 350px;
 height:270px;
 background-color:hsla(0,0%,100%,.3);
 margin-right:20px;
 margin-left: 20px;
 margin-top:70px;
 border-radius: 20px;
 box-shadow: 0px 5px 5px 0px #6A6B67;
 overflow: hidden;
<<<<<<< HEAD:frontEnd/carbooking/src/components/category/AllCategories.styled.js

=======
 cursor:pointer;
 color: #fff;
>>>>>>> dev-Dayana-galeriaDeProducto:frontEnd/carbooking/src/components/category/cardCategory.style.js
 :hover{
  webkit-transform:scale(1.2);
  transform:scale(1.1);
 }
@media (max-width: 667px) {
  margin-bottom:40px;
  margin-top:20px;
  margin-left:30px;
  width: 90%;
  height: 100%;
  }
`;

export const ProductCardImg = styled.img`
  width: 300px;
  height: 180px;
  object-fit: cover;
 
  @media (max-width: 667px) {
    width: 100%;
    height: 300px;
  
    }

`;

//contenedor de la descripcion
export const Description = styled.div`
  width: 150px;
  margin-top: 1px;
;

`;

export const Title = styled.div`
  display:none;
  width: 800px;
  height:60px;

  @media (max-width: 667px) {
    display: flex;
    width: 380px;
    font-size:small;
    color:white;
    height:70px;
    margin-top: 1px;
    padding-left:8px;
    margin-left:20px;

    }
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
opacity: 0.9;
margin-left:5px;
display:flex;
justify-content: flex-start
color: #fff;
`;
export const H1 = styled.h1`
  text-align: left;
  color: black;
  font-size: 30px;
  margin: 30px auto;
`;

export const ViewMore = styled.button`

cursor:pointer;
background-color: transparent;
font-size:small;
font:bold;
`

