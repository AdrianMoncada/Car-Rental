import styled from "styled-components";

const Orange = "#FCA311";
const PetrolBlue = "#14213D";
const FontFamily = "'Quicksand', sans-serif;";

export const Container = styled.div`
    display: flex;
    margin 45px;
    height: 100%; 
    justify-content: space-around;
    flex-wrap: wrap; 
    font-family: ${FontFamily};

    @media (max-width: 670px) {
        margin: 0px;
        width: 100%;
    }

    @media (max-width: 900px) {
        margin: 0px;
        width: 100%;
    }

`
export const Card = styled.div`
    display: flex;
    margin: 25px; 
    flex-direction: column;
    box-shadow: 29px 22px 50px -1px rgba(0,0,0,0.38);
    border-radius: 1rem;
    background-color: #fff;
    text-align: justify;
    overflow: hidden;
    width: 20rem;
    height: 30rem; 
    color: #17293A;
    font-family: ${FontFamily};
    


    :hover{
        background-color:  ${Orange};
        transition: background 1.4s 0s ease;
        color: white;
        button{
            background-color:  ${PetrolBlue};
            color:  white;
            transition: background 2s 0s ease;
        }
       }

`

export const BoxOne = styled.div`
    display: flex;
    flex-direction: row;
    margin: 5px;
    overflow: hidden;
    height: 15rem;
`


export const MiniBoxOne = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left ;
    width: 300%;
    height: 10rem;
    margin: 3px;
    margin: 10px;
`

export const HInMiniBoxOne = styled.div`
    position: relative;
    bottom: 10px; 

`

export const PCity = styled.p`
    font-weight: bold;
`

export const Button = styled.button`
    cursor: pointer;
    padding: 0.4rem 2rem;
    border-radius: 0.3rem;
    background-color: ${Orange}; 
    border: 1px solid  ${Orange};
    color:  ${PetrolBlue};
    font-size: 16px;
    font-weight: bold;
    z-index: 0;
`

export const MiniBoxTwo = styled.div`
    height: 100%;
    margin: 3px;
    overflow: hidden;
    font-size: 10px;
    text-align: justify;
    position: relative;
    top: 20px;
`

export const BoxTwo = styled.div`
    display: flex;
    margin: 5px;
    height: 20rem;
    overflow: hidden;
    justify-content: center;
    align-items: center;
`

export const Image = styled.img`
    width: 90%;
    height: 65%;
`