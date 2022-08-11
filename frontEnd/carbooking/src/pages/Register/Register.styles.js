import styled from "styled-components";


export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-content: space-around;
    align-items: center;
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

export const LastParagraph = styled.p`
    display: flex;
    flex-direction: column;
    text-align: center;
    
    @media (min-width: 1000px) {
    width: 30%;
    text-align: center;
}
    

`