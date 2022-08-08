import styled from "styled-components";


export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    @media (min-width: 600px) {
        text-align: justify;
        height: 700px;
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

export const UltimoParrafo = styled.p`

@media (min-width: 1000px) {
    width: 30%;
    text-align: center;
}
    

`