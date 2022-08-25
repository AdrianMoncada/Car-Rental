import styled from 'styled-components'

const Orange = "#FCA311";
const PetrolBlue = "#14213D";
const LightGrey = "#E5E5E5";


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
`
//Styles for nav bar with title and arrow
export const Main = styled.nav`
  display:flex;
  margin-top:-10px;
  justify-content: space-between;
  background: #219ebc;
  padding: 24px;
  width: 100%;
  height: 150px;

`

export const InfoProduct = styled.div`
  display:column;
  justify-content: center;
  align-items: center;
  color:black;
  width:30%;
  height: 100px;
  margin-top:10px;
  @media (max-width: 667px) {
    display: flex-start;
   }
`;

export const IconArrow= styled.div`
  display:flex;
  color:black;
  justify-content: space-between;
  align-items: center;
  width:100px;
  height: 58px;
  padding-right:40px;

  @media (max-width: 667px) {
    display: none;
  }
`
//Styles for ubication bar and qualification of product

export const Ubication = styled.div `
  display:flex;
  margin-top:-15px;
  justify-content: space-between;
  background: #a8dadc;
  padding: 24px;
  width: 100%;
  height: 150px;
`

export const InfoUbication = styled.div`
  display:column;
  justify-content: center;
  align-items: center;
  color:black;
  width:30%;
  height: 100px;
  margin-top:30px;
  @media (max-width: 667px) {
    display: flex-start;
   }
`
export const Qualification= styled.div`
  display:flex;
  color:black;
  justify-content: space-between;
  align-items: center;
  width:200px;
  height: 58px;
  padding-right:40px;

  @media (max-width: 667px) {
    display: none;
  }
`

//styles for block galery products

export const Galery = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    place-items: center;
    background-color: ${Orange};
    width: 100%;
    height: 500px;
    padding-left: 150px;
    gap:10px;
`

export const Image = styled.div`
    width: 100%;
    height: ${props => props.heigth};
    grid-area: ${props => props.area}; 
    border-radius: ${props => props.border};  
    color: transparent;   
    .imagenApi{
      width: 100%;
      height: 100%;
      overflow: hidden;
      border-radius: ${props => props.border}; 
    }

`
export const PhotoFive = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    width: 100%;
    height: 200px;
    border-radius: 2rem;
    overflow: hidden;

    .imagenApi{
      width: 100%;
      height: 100%;
      overflow: hidden;
      border-radius: ${props => props.border}; 
    }

`

export const VerMas = styled.button`
    width: 70px;
    height: 50px;
    background-color: transparent;
    border: none;
    color: #000;
    position: relative;
    left: 35px;
    bottom: 50px;
`
    


//styles for block description
export const BlockDescription = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding-left:20px;
width: 100%;
height: 150px;

`
export const Text = styled.p`
text-align:left;
`
//styles for block caracteristics
export const BlockCaracteristics = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding-left:20px;
width: 100%;
height: 150px;

`
//styles for block policies
export const BlockPolicies = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding-left:20px;
width: 100%;
height: 250px;

`

