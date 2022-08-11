import styled from "styled-components";

//contenedor de todas las cartas
export const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-image: url("https://images.pexels.com/photos/566061/pexels-photo-566061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2https://d2hucwwplm5rxi.cloudfront.net/wp-content/uploads/2021/08/30123956/Tips-for-Road-Trip-Cover-30-08-1.jpg");
  
  width: 100%;
  height:500px;
  justify-content: space-between;
  place-content: center;
  margin-top: -20px;
  padding-top : 14px;
  @media (max-width: 667px) {
    flex-direction: column;
    height:2000px;
    
    }

`;

//contenedor de cada carro

export const ProductCard = styled.div`
 width: 350px;
 height:270px;
 background-color:hsla(0,0%,100%,.3);
 margin-right:20px;
 margin-top:70px;
 border-radius: 20px;
 box-shadow: 0px 5px 5px 0px #6A6B67;
 overflow: hidden;
 :hover{
  webkit-transform:scale(1.2);transform:scale(1.2);
 }
@media (max-width: 667px) {
  margin-bottom:40px;
  margin-top:20px;
  margin-left:30px;
  width: 500px;
  height:400px;

  }
`;

export const ProductCardImg = styled.img`
  width: 300px;
  height: 180px;
  object-fit: cover;
 
  @media (max-width: 667px) {
    width: 500px;
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
color: #31363F;
opacity: 0.9;
margin-left:5px;
display:flex;
justify-content: flex-start
`;


