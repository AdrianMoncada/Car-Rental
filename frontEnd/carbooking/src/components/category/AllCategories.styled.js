import styled from "styled-components";


const Orange = "#FCA311";
const PetrolBlue = "#14213D";
//contenedor de todas las cartas
export const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 350px;
  background-color:#FCA311;
  background-size: cover;
  background-repeat: no-repeat;
  justify-content: space-between;
  align-items: center;
  margin-top: -20px;
  padding-top : 14px;

  @media (max-width: 667px) {
    flex-direction: column;
    width:100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    }

`;

//contenedor de cada carro

export const ProductCard = styled.div`
 width: 350px;
 height:270px;
 background-color:white;
 margin-right:20px;
 margin-left: 20px;
 border-radius: 20px;
 box-shadow: 0px 5px 5px 0px #6A6B67;
 overflow: hidden;
 cursor:pointer;
 color: #000;
 object-fit: cover;
 :hover{
  webkit-transform:scale(1.2);
  transform:scale(1.1);
 }
@media (max-width: 667px) {
  margin-bottom:40px;
  margin-top:20px;
  margin-left:5px;
  margin-right:10px;
  width: 90%;
  height: 50%;
  }
`;

export const ProductCardImg = styled.img`
  width: 220px;
  height: 150px;
  overflow: hidden;
 
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
justify-content: flex-start;
color: #fff;
`;
export const H1 = styled.h1`
  text-align: left;
  color: black;
  font-size: 30px;
  margin: 30px auto;
`;

export const ViewMore = styled.button`

background-color:  #14213D;
color:  white;
border-radius: 9px;
position: relative;

left: 65px;
border: 2px solid ${PetrolBlue};
:hover{
  background-color:  ${Orange};
  transition: background .5s 0s ease;
  color: white;}


  @media (max-width: 667px) {
   display: flex;
   position: relative;
   left: 215px;
   bottom: 10px;
    }
`

