import styled from "styled-components";

export const Body = styled.body`
    
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    
    
`


export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 150px;
    margin-bottom: 150px;

    @media (min-width: 768px) { 
        height: 700px;
        overflow-y: scroll;
        scroll-behavior: smooth;
    }

`
export const CenteredText = styled.p`
    display: flex;
    flex-direction: column;
    text-align: center;
`

export const InputsContainer = styled.div`
    width: 75%;

    @media (min-width: 667px) {
        width:40%;
    }

`


export const Inputs = styled.input`
    width: 97%;
    height: 30px;
    align-items: center;

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
    border: 2px solid #f0572d;
    color:  #f0572d;
    font-size: 1rem;
    font-weight: 600;
    width: 73%;

    

    @media (min-width: 667px) {
        width:40%;
    }

`

export const TextLink = styled.p`
    display: flex;
    flex-direction: row;
    text-align: center;
    justify-content: center;
    position: relative;
    top: 10px;
`

export const LastParagraph = styled.p`
    display: flex;
    flex-direction: column;
    text-align: center;
    
    @media (min-width: 1000px) {
    width: 30%;
    text-align: center;
}
    

`