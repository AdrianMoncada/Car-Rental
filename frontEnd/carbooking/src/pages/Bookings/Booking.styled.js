import styled from "styled-components";
const LightGray = "#E5E5E5";

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
 background:yellow;
 width: 100%;
 height: 100%;
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
export const PersonalData = styled.div`
 grid-area: 1 / 1 / 2 / 2; 
 display: flex;
 height:300px;
 
 background:red;
 @media (max-width: 1224px) {
  grid-area: 1 / 1 / 2 / 4; 
  background:orange;
}
  `
export const Calendar = styled.div`
 grid-area: 3 / 1 / 4 / 2; 
 background:blue;
 @media (max-width: 1224px) {
  grid-area: 3 / 1 / 4 / 4; 
}
`
export const ReservedProduct = styled.div`
 grid-area: 1 / 3 / 6 / 4; 
 background:green;

 @media (max-width: 1224px) {
  grid-area: 6 / 1 / 7 / 4; 
  height:200px;
}
  `
export const Policies = styled.div`
 grid-area: 7 / 1 / 8 / 4; 
 background:purple;
 height:200px;
`

export const Schedule = styled.div`
 grid-area: 5 / 1 / 6 / 2; 
 background:pink;
 @media (max-width: 1224px) {
  grid-area: 5 / 1 / 6 / 4; 
}
`

