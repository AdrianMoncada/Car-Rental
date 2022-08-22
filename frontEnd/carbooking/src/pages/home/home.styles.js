import styled from "styled-components";

const Orange = "#FCA311";
const PetrolBlue = "#14213D";
const LightGray = "#E5E5E5";
const FontFamily = "'Quicksand', sans-serif;";

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

export const Headers = styled.header`
  display: flex;
  width: 100%;
  height: 60px;
  position: sticky;
  top: 0px;
  color:white;
  background: ${PetrolBlue};
  opacity: 0.96;
  justify-content: space-between;
  position: sticky;   
  top: 0; 
  z-index: 1;
`;

export const ContainerIcon = styled.div`
  display: flex;
  justify-content:space-between;
  align-items:center;

  margin-top:30px;
  padding-right:40px;
  width: 290px;
  margin-left:40px;
  margin-top 0px;

  @media (max-width: 237px) {
    display: none;
  }
`;

export const Icon = styled.img`
  height:50px;
 
`;

export const ContainerIcon2 = styled.div`
  display: none;
  justify-content:space-between;
  margin-top:30px;
  padding-right:20px;
  width:230px;
  margin-left:40px;
  margin-top 10px;
   
  @media (max-width: 667px) {
  display: flex;
  }
`;

export const Icon2 = styled.img`
  height:70px;
`;

export const text = styled.p`
  color: 191B1D;
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 22px;
`;

export const ContainerBtn = styled.div`
  display: flex;
  justify-content:space-between;
  align-items: center;
  width:400px;
  height: 100%;
  @media (max-width: 667px) {
  display: none;
  }
`;

export const ButtonSign = styled.button`
  border-radius: 9px ;
  background-color: ${Orange};
  width: 206px;
  height: 40px;
  font-size: 16px;
  font-family: ${FontFamily};
  font-weight: bold;
  color: ${PetrolBlue};
  border: 2px solid ${Orange};
  margin-right:10px;
  cursor: pointer;

  :hover{
    color: ${Orange};
    background-color: ${PetrolBlue};
  }
`;
export const ContainerMenu = styled.div`
  display: none;
  margin-top:30px;
  backgroun:blue;

  padding-right:60px;
  padding-left:20px;
  width:50px;

  @media (max-width: 667px) {
  display: flex;
  }
`;

export const Menu = styled.img`
  height:20px;
`;

export const Footers = styled.footer `
  display:flex;
  justify-content: space-between;
  align-items: center;
  background:${PetrolBlue};
  opacity: 0.96;
  color:white;
  padding: 24px;
  width:100%;
  height: 30px;
  overflow: hidden;
`;

export const AuthRigth = styled.div`

  display:flex;
  justify-content: space-between;
  align-items: center;
  width:200px;
  height: 58px;
  padding-top: 15px;
  padding-right:40px;


  @media (max-width: 667px) {
    display: flex-start;
   }
`;
export const SocialMediaContainer = styled.div`

  display:flex;
  justify-content: space-between;
  align-items: center;
  width:200px;
  height: 58px;
  padding-right:40px;

  @media (max-width: 667px) {
    display: none;
  }
`;


