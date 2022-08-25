import styled from "styled-components";

const Orange = "#FCA311";
const LightGrey = "#E5E5E5";
const Blue = "#34495E";
const OrangeTwo = "#F5B041";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: ${LightGrey};
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;

  @media (max-width: 670px) {
    display: flex;
    flex-direction: column;
  }


`;
//Styles for nav bar with title and arrow
export const Main = styled.nav`
  display: flex;
  justify-content: space-between;
  background: ${Blue};
  padding: 24px;
  width: 98%;
  height: 120px;
  border-radius: 20px;
  opacity: 0.97;
  @media (max-width: 670px) {
    display: flex;
    flex-direction: column;
    width: 80%;
  }
`;

export const InfoProduct = styled.div`
  display: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  width: 30%;
  height: 100px;

  @media (max-width: 667px) {
    display: flex-start;
  }
`;

export const IconArrow = styled.div`
  display: flex;
  color: black;
  justify-content: space-between;
  align-items: center;
  width: 100px;
  height: 58px;
  padding-right: 40px;

  @media (max-width: 667px) {
    display: none;
  }
`;
//Styles for ubication bar and qualification of product

export const Ubication = styled.div`
  display: flex;
  border-radius: 20px;
  opacity: 0.97;
  justify-content: space-between;
  background: ${OrangeTwo};
  padding: 24px;
  width: 98%;
  height: 150px;

  @media (max-width: 670px) {
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 180px;
  }


`;

export const InfoUbication = styled.div`
  display: column;
  justify-content: center;
  align-items: center;
  color: ${Blue};
  font-size: 30px;
  width: 30%;
  height: 100px;
  margin-top: 30px;
  @media (max-width: 667px) {
    display: flex-start;
  }
`;

export const IconUbication = styled.span`
.ubication {
  width: 48px;
  height: 42px;
  display: block;
  margin: 20px auto;
  box-sizing: border-box;
  position: relative;
  bottom: 85px;
  left: 190px;
}
.ubication::after {
  content: '';  
  box-sizing: border-box;
  width: 48px;
  height: 48px;
  left: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50% 50% 0;
  border: 15px solid  ${Blue};
  transform: rotate(45deg) translate(0, 0);
  box-sizing: border-box;
  animation: animMarker 0.4s ease-in-out infinite alternate;
}
.ubication::before {
  content: '';  
  box-sizing: border-box;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  top: 150%;
  width: 24px;
  height: 4px;
  border-radius: 50%;
  background: ${Blue};
  animation: animShadow 0.4s ease-in-out infinite alternate;
}

@keyframes animMarker {
  0% {
    transform: rotate(45deg) translate(5px, 5px);
  }
  100% {
    transform: rotate(45deg) translate(-5px, -5px);
  }
}

@keyframes animShadow {
  0% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
}
    
`

export const Qualification = styled.div`
  display: flex;
  color: black;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  height: 58px;
  padding-right: 40px;
  color: ${Blue};
  font-size: 20px;

  @media (max-width: 667px) {
    display: none;
  }
`;

//styles for block galery products

export const Galery = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  place-items: center;
  background-color: ${Orange};
  width: 90%;
  height: 500px;
  box-shadow: 29px 22px 50px -1px rgba(0, 0, 0, 0.38);
  border-radius: 1rem;
  background-color: #fff;
  padding-left: 150px;
  gap: 10px;



  @media (max-width: 670px) {
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 700px;
  }

`;

export const Image = styled.div`
  width: 100%;
  height: ${(props) => props.heigth};
  grid-area: ${(props) => props.area};
  border-radius: ${(props) => props.border};
  color: transparent;
  border: 2px solid ${Blue};
  .imagenApi {
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: ${(props) => props.border};
  }
  
  @media (max-width: 670px) {

  }

`;
export const ImagenVerMas = styled.div`
width: 100%;
height: ${(props) => props.heigth};
grid-area: ${(props) => props.area};
border-radius: ${(props) => props.border};
color: transparent;
border: 2px solid ${Blue};
.imagenApi {
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: ${(props) => props.border};
}

@media (max-width: 670px) {
  width: 260px;
  height: 30%;
  position: relative;
  top: 100px;
  right: 80px;
}
`;

export const VerMas = styled.button`
  width: 75px;
  height: 50px;
  background-color: transparent;
  border: none;
  color: #000;
  font-weight: bold;
  position: relative;
  left: 35px;
  bottom: 50px;

  @media (max-width: 670px) {
    // position: relative;
    // bottom: 120px;
    // left: 80px;
`;

//styles for block description
export const BlockDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 20px;
  width: 98%;
  margin-top: 30px;
  padding-top: 30px;
  border-radius: 20px;
  height: 150px;
  background: ${OrangeTwo};
  opacity: 0.97;

  @media (max-width: 670px) {
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 150%;
  }

`;
export const Text = styled.p`
  text-align: left;
`;
//styles for block caracteristics
export const BlockCaracteristics = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 20px;
  width: 100%;
  height: 150px;

  @media (max-width: 670px) {
    display: flex;
    flex-direction: column;
    width: 80%;
  }

`;
//styles for block policies
export const BlockPolicies = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 20px;
  width: 98%;
  height: 300px;
  padding-top: 15px;
  line-height: 1.8;
  border-radius: 20px;
  background-color: ${Blue};
  opacity: 0.97;
  color: #fff;

  @media (max-width: 670px) {
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 100%;
  }

`;
