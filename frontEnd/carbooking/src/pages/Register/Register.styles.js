import styled from "styled-components";

const Orange = "#FCA311";
const PetrolBlue = "#14213D";

export const Body = styled.body`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-size: 100%;
    color: ${PetrolBlue};
    gap: 20px;
    flex-wrap: wrap;
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
    display: flex;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 20px;
    color: ${Orange};
    position: relative;
    top: 5px;
`

export const TwoDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 100%; 
    width: 90%;
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
export const PrincipalForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;

    margin-left: 10px;
    margin-right: 10px;
    overflow: hidden;

    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, .2); 
    border-radius: 5px;
    background-color: rgba(255, 255, 255, .15);
  
    backdrop-filter: blur(3px);

    @media (min-width: 670px) {
        width: 60%;
        z-index: 0;
        width: 90%;
    }
`
export const CenteredText = styled.p`
    display: flex;
    flex-direction: column;
    text-align: center;
    font-weight: 500;
`

export const InputsContainer = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;

    color: ${Orange};
    line-height: 1.5;


    

    @media (min-width: 667px) {
        width:60%;
    }

`


export const Input = styled.input`
    width: 97%;
    height: 30px;
    border: none;
    border-bottom: 1px solid #17293A;
    background-color: rgba(255, 255, 255, .0);
    backdrop-filter: blur(0px);
    color: ${PetrolBlue};

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


export const Button = styled.button`
    cursor: pointer;
    padding: 0.7rem 2.3rem;
    border-radius: 0.2rem;
    background-color: #fff;
    border: 2px solid ${PetrolBlue};
    color: ${Orange};
    font-size: 1rem;
    font-weight: 600;
    width: 60%;
    user-select: none;
     background-color: rgba(255, 255, 255, .0);
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

export const TextLink = styled.p`
    display: flex;
    flex-direction: row;
    text-align: center;
    justify-content: center;
    position: relative;
    top: 32px;
    font-weight: bold;
`

export const ButtonLogin = styled.button`
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

export const MessageError = styled.p`
    color: #8BFF38;
    border: solid 1px ${PetrolBlue};
    position: relative;
    top:40px;
` 