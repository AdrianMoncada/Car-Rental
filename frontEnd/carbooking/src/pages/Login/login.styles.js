import styled from "styled-components";

export const Body = styled.body`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`


export const Headers = styled.header`
    width: 100%;
    position: fixed;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;     
    margin-top: 150px;
    margin-bottom: 100px;

    @media (min-width: 600px) {
        text-align: justify;
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

export const Inputs = styled.input`
    width: 70%;
    height: 30px;

    @media (min-width: 667px) {
        width:40%;
    }
`

export const LastParagraph = styled.p`

@media (min-width: 1000px) {
    width: 30%;
    text-align: center;
}
`

export const Footers = styled.footer`
width: 100%;
position: fixed;
   left: 0;
   bottom: 0;
`

export const ErrorMessage = styled.h3`
    color: red;
`