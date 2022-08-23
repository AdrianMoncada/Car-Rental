import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
height: 100%;

min-height: 100vh;
background: #e9ebee;
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
  background-color: #F0572D;
  color:white;
  padding: 24px;
  width: 100%;
  height: 150px;

`

export const InfoProduct = styled.div`
  display:column;
  justify-content: center;
  align-items: center;
  background:yellow;
  color:black;
  width:30%;
  height: 100px;
  margin-top:-20px;
  @media (max-width: 667px) {
    display: flex-start;
   }
`;

export const IconArrow= styled.div`
  display:flex;
  background:yellow;
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
  margin-top:15px;
  justify-content: space-between;
  background-color: green;
  color:white;
  padding: 24px;
  width: 100%;
  height: 150px;
`

export const InfoUbication = styled.div`
  display:column;
  justify-content: center;
  align-items: center;
  background:yellow;
  color:black;
  width:30%;
  height: 100px;
  margin-top:-20px;
  @media (max-width: 667px) {
    display: flex-start;
   }
`
export const Qualification= styled.div`
  display:flex;
  background:yellow;
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
    background-color: red;
    margin: 35px;
    width: 100%;
    height: 500px;
    padding-left: 150px;
    gap:10px;
`

export const PhotoFive = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    grid-area: 3 / 4 / 4 / 5;
    width: 100%;
    height: 200px;
    border-radius: 2rem;
    overflow: hidden;
    background-image: url(https://images.unsplash.com/photo-1572089789747-71c98f3e2213?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80);
`

export const VerMas = styled.button`
    background-color: transparent;
    border: none;
    color: white;
    position: relative;
    right: 15px;
    bottom: 10px;
`
    


//styles for block description
export const BlockDescription = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding-left:20px;
background:red;
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
background:brown;
width: 100%;
height: 150px;

`
//styles for block policies
export const BlockPolicies = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding-left:20px;
background:gray;
width: 100%;
height: 150px;

`

export const Image = styled.div`
    width: ${props=> props.width};
    height: ${props => props.heigth};
    background-image: url(https://images.unsplash.com/photo-1572089789747-71c98f3e2213?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80);
    grid-area: ${props => props.area}; 
    border-radius: ${props => props.border};
    
`
