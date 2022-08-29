import styled from "styled-components";

const Orange = "#FCA311";
const PetrolBlue = "#14213D";
const RedAlive = "#E30A00";


export const Body = styled.body`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: url(https://mlspltulmwun.i.optimole.com/nub0i-4-CsPYCKUz/w:1000/h:668/q:mauto/https://blog.gonhergo.com/wp-content/uploads/2021/08/salir-a-carretera-gonhergo.jpg);
    background-size: cover;
 
`


export const Headers = styled.header`
    width: 100%;
    position: fixed;
    z-index: 1;

`
export const ContainerForm = styled.div`
  display: flex;
  justify-content: center;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 10px;
    margin-right: 10px;
    overflow: hidden;
    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, .2); 
    border-radius: 5px;
    background-color: rgba(255, 255, 255, .15);
  
    backdrop-filter: blur(3px);

    @media (min-width: 670px) {
        width: 100%;
        z-index: 0;
    }
`
export const OneDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: 15px;
`

export const Title =  styled.h2`
    color: ${Orange};
` 

export const H6 = styled.h6`
    position: relative;
    top: 10px;
`

export const TwoDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 100%; 
    width: 90%;
`
export const InputsContainer = styled.div`
    width: 75%;
    color: ${Orange};

    @media (min-width: 667px) {
        width:40%;
    }

`

export const ThreeDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    

    position: relative;
    top: 25px;
    width: 100%;
`
export const Button = styled.button`
    cursor: pointer;
    padding: 0.7rem 2.3rem;
    border-radius: 0.2rem;
    background-color: #fff;
    border: 2px solid #17293A;
    color: ${Orange};
    font-size: 1rem;
    font-weight: 600;
    width: 60%;
    user-select: none;
    background-color: rgba(255, 255, 255, .15);
    backdrop-filter: blur(0px);
    

    @media (min-width: 667px) {
        width:40%;
    }

    :hover{
        border: 2px solid ${Orange};
        color: ${PetrolBlue};
        transition: all 0s 0s ease;
    }

`

export const Inputs = styled.input`
    width: 97%;
    height: 30px;
    border: none;
    border-bottom: 1px solid #17293A;
    background-color: rgba(255, 255, 255, .0);
    backdrop-filter: blur(0px);
    color: ${PetrolBlue};
    font-weight: 490;
    ::placeholder{
        color: ${PetrolBlue};
    }

    :focus{
        outline: none;
        background-color: rgba(255, 255, 255, .0);
    }


    @media (min-width: 667px) {
        width:98%;
        height: 40px;
    }
`

export const TextLink = styled.p`
    display: flex;
    flex-direction: row;
    text-align: center;
    justify-content: center;
    position: relative;
    top: 32px;
    font-weight: 500;
`

export const ButtonRegister = styled.button`
background-color: transparent;
color: ${PetrolBlue}; 
font-weight: 500;
border: none;
position: relative;
bottom: 8px;

 :hover{
    color: ${Orange};
 }
`

export const ParagraphLink = styled.p`
    text-decoration: none;

`

export const LastParagraph = styled.p`
    display: flex;
    flex-direction: column;
    text-align: center;
    font-weight: 500;
    
    @media (min-width: 1000px) {
    width: 50%;
    text-align: center;
    position: relative;
    bottom: -6px;
}
    

`

export const Footers = styled.footer`
width: 100%;

`

export const ErrorMessage = styled.h3`
    display: flex;
    justify-content: center;
    width: 100%;
    font-size: 12px;
    color: ${RedAlive};
`