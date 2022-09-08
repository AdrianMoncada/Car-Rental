import styled from "styled-components";
const LightGray = "#E5E5E5";
const Orange = "#FCA311";
const PetrolBlue = "#14213D";


export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: ${LightGray};
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;

`;

export const GridContainer = styled.form`
 display: grid;
 width:100%;
 height: 1500px;
 margin:0;
 padding:0;
  grid-template-columns: 7.1fr 0.1fr 5.4fr;
  grid-template-rows: 1.7fr 0.5fr 2.4fr 0.5fr 2.4fr 0.1fr 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  @media (max-width: 1224px) {
    height:800px;
  }
   
  
`
export const InputsContainer = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    color: ${Orange};
    font-weight: 500;
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



export const PersonalData = styled.div`
 grid-area: 1 / 1 / 2 / 2; 
 display: flex;
 height:400px;
 width:450px;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center; 
 margin-left: 140px;
 margin-top: 100px;


 box-shadow: 0 0 1rem 0 rgba(0, 0, 0, .2); 
    border-radius: 5px;
    background-color: rgba(255, 255, 255, .15);
  
    backdrop-filter: blur(3px);

 @media (max-width: 1224px) {
  grid-area: 1 / 1 / 2 / 4; 
  background:orange;
}
  `
export const Calendar = styled.div`
 grid-area: 3 / 1 / 4 / 2; 

  display: flex;
  height:400px;
  width:600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  margin-left: 60px;
 
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, .2); 
     border-radius: 5px;
     background-color: rgba(255, 255, 255, .15);
   
     backdrop-filter: blur(3px);

 @media (max-width: 1224px) {
  grid-area: 3 / 1 / 4 / 4; 
}
`
export const ReservedProduct = styled.div`
 grid-area: 1 / 3 / 6 / 4; 

 width: 80%;
 height: 1150px;
 margin-right: 200px;
 margin-top: 100px;

 box-shadow: 0 0 1rem 0 rgba(0, 0, 0, .2); 
     border-radius: 5px;
     background-color: rgba(255, 255, 255, .15);
   
     backdrop-filter: blur(3px);

 @media (max-width: 1224px) {
  grid-area: 6 / 1 / 7 / 4; 
  height:200px;
}
  `


export const ImagenQuemada = styled.img`
 width: 100%;
 position: relative;
 top: 80px;

` 

export const Descripcion = styled.h3`
position: relative;
top: 150px;

`

export const ContainerDescricionDetalleReserva = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 80%;
  margin-left: 30px;

`

export const ParrafoDetalle = styled.p`
position: relative;
top: 200px;
display: flex;
text-align: left;
`

export const TituloDetalleReserva = styled.h4`
 position: relative;
 top: 40px;
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
  position: relative;
  top: 400px;

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

export const Policies = styled.div`
 grid-area: 7 / 1 / 8 / 4; 
 margin-top: -157px;
 height:200px;

 display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 30px;
  padding-top: 30px;
  line-height: 1.8;
  background-color: ${Orange};
  opacity: 0.97;
  color: #fff;

  @media (max-width: 670px) {
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 100%;
  }
`

export const Schedule = styled.div`
 grid-area: 5 / 1 / 6 / 2; 
  width: 85%;
 height:150px;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 margin-left: 60px;
 margin-top: -30px;
 line-height: 2;

 box-shadow: 0 0 1rem 0 rgba(0, 0, 0, .2); 
    border-radius: 5px;
    background-color: rgba(255, 255, 255, .15);
  
    backdrop-filter: blur(3px);



 @media (max-width: 1224px) {
  grid-area: 5 / 1 / 6 / 4; 
}
`

