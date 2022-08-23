import styled from "styled-components";

// Aquí se encuentran los estilos de los contenedores de cada elemento en el banner

const Orange = "#FCA311";
const PetrolBlue = "#14213D";

export const BrowserContainer = styled.div`
    const FontFamily = "'Quicksand', sans-serif;";
    width: 100%;
    display: flex;
    flex-direction: row;
    margin: 20px;
    justify-content: space-around;
    align-items: center;

    @media (max-width: 667px) {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 200px;
        align-items: center;
        z-index: 0; 
    }
`;

export const SelectContainer = styled.div`
`;

export const Select = styled.select`
  width: 200px;
  height: 30px;
  border-radius: 20px;
  text-align: center;
  cursor: pointer;
  border: 2px solid ${Orange};
`;

export const CheckInContainer = styled.div`
  display: flex;
`;

export const CheckOutContainer = styled.div`
  display: flex;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    left: 7px;
`

export const Button = styled.button`
  background: ${PetrolBlue}; /* color de fondo */
  color: ${Orange}; /* color de fuente */
  font-weight:bold; 
  border: 2px solid ${Orange}; /* tamaño y color de borde */
  width: 200px;
  padding: 5px;
  border-radius: 8px; /* redondear bordes */
  position: relative;
  z-index: 0;
  overflow: hidden;
  display: inline-block;
  :hover {
    color: ${PetrolBlue}; /* color de fuente hover */
    font-weight: bold;
    border: 2px solid ${Orange}; /* tamaño y color de borde */
  }

  ::after {
    content: "";
    background: ${Orange}; /* color de fondo hover */
    position: absolute;
    z-index: -1;
    padding: 16px 20px;
    display: block;
    top: 0;
    bottom: 0;
    left: -100%;
    right: 100%;
    -webkit-transition: all 0.35s;
    transition: all 0.35s;
  }

  :hover::after {
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    -webkit-transition: all 0.35s;
    transition: all 0.35s;
  }
`;
