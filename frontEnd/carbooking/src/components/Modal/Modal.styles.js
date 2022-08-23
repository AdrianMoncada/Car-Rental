import styled from "styled-components"
const LightGrey = "#E5E5E5";
export const Overlay = styled.div`
    
    width: 100%;
    height: 100%;
    position: absolute;
    top: 350px;
    left: 0;
    overflow: hidden;
    background: rgba(0,0,0,.7);  


    display: flex;
    justify-content: center;
    align-items: center;

`

export const ModalContainer = styled.div`
    width: 600px;
    height: 450px;
    background: #fff;
    position: relative;
    border-radius: 5px;
    box-shadow: rgba(100,100,111,0.2) 0px 7px 29px 0px;
    padding: 20px;
    border: 5px solid blue; 


    @media (max-width: 650px) {

        width: 300px;
        height: 350px
        
    }
`

export const EncabezadoModal = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #E8E8E8;

`

export const Cerrar = styled.button`
    position: absolute;
    top: 5px;
    left: 5px;
    width: 30px;
    height: 30px;
    border: none;
    background: none;
    cursor: pointer;
    transition: .3s ease all; 
    border-radius: 5px;
    color: #1766DC;
    z-index: 1;
    
    &:hover{
        background: ${LightGrey};
    }

` 