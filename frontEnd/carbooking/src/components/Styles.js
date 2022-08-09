import styled from "styled-components";

export const Cards = styled.div`
    display: flex;
    width: 710px;
    height: 279x; 
    margin: 30px;
    -webkit-box-shadow: 29px 22px 50px -1px rgba(0,0,0,0.38);
   -moz-box-shadow: 29px 22px 50px -1px rgba(0,0,0,0.38);
   box-shadow: 29px 22px 50px -1px rgba(0,0,0,0.38);
   border-radius: 30px;
   width: 100%;
   background-color: #fff;
   text-align: justify;


   @media (max-width: 800px) {
     display: flex;
     flex-direction: column;
    }
`

export const HeartContainer = styled.div`
     width: 100%;
     height: 30px;
     display: flex;
     justify-content: flex-end;
     color: red;



     @media (max-width: 800px) {
          display: flex;
          height: 100%;  
          width: 100%; 
         }
`

export const ImageContainer = styled.div`
     width: 50%;
     border-radius: 10px;
     @media (max-width: 800px) {
          display: flex;
          height: 100%;  
          width: 100%; 
         }
`

export const Image = styled.img`
     width: 100%;
     height: 100%;
     border-radius: 10px;
`

export const IconContainer = styled.div`
         color: #f0572d;

`

export const Conteiner = styled.div`
     display: flex;
     justify-content: space-around;
     flex-wrap: wrap; 
`
export const ButtonContainer = styled.div` 
     width: 100%;
     display: flex;
     justify-content: flex-end;

`
export const Button = styled.button`
     width: 40%;
     cursor: pointer;
     padding: 0.7rem 2.3rem;
     border-radius: 0.2rem;
     background-color: #fff;
     border: 2px solid #f0572d;
     color:  #f0572d;
     font-size: 1rem;
     font-weight: 600;
     position: relative;
     right: 10px;
     z-index: 0;
` 

export const Information = styled.article`
     display: flex;
     flex-direction: column;
     align-items: flex-start;
     width: 60%;
     margin: 15px;
     @media (max-width: 800px) {
          display: flex;
          height: 98%;  
          width: 95%; 
         }
`
