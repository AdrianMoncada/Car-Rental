import styled from "styled-components"
const LightGrey = "#E5E5E5";

export const Overlay = styled.div`
    
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,.5);   

    display: flex;
    justify-content: center;
    align-items: center;

`

export const ModalContainer = styled.div`
    width: 500px;
    height: 400px;
    background: #fff;
    position: relative;
    border-radius: 5px;
    box-shadow: rgba(100,100,111,0.2) 0px 7px 29px 0px;
    padding: 20px;
`

export const EncabezadoModal = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #E8E8E8;

    h3 {
        font-weight: 500;
        font-size: 16px;
        color: #1766DC;
    }

`

export const Cerrar = styled.button`
    position: absolute;
    top: -5px;
    left: -4px;

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