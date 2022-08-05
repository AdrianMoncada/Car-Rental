import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: #C4C4C4;
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
  height: 80px;
  background: #FFFFFF;
  justify-content: space-between;
  border-bottom: 1px solid #c7c7c7;
`;

export const ContainerIcon = styled.div`
  display: flex;
  justify-content:space-between;
  margin-top:30px;
  padding-right:20px;
  width:230px;
  margin-left:40px;
  margin-top 10px;

  @media (max-width: 640px) {
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
   
  @media (max-width: 624px) {
  display: flex;
  }
`;

export const Icon2 = styled.img`
  height:50px;
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
  margin-top:30px;
  padding-right:40px;
  width:400px;
  @media (max-width: 624px) {
  display: none;
  }
`;

export const ButtonSign = styled.button`
  border-radius:5px ;
  background-color: white;
  width: 206px;
  height: 40px;
  color:#F0572D;
  border: 1px solid #F0572D;
  margin-right:10px;
  
`;
export const ContainerMenu = styled.div`
  display: none;
  margin-top:30px;
  padding-right:40px;
  padding-left:200px;
  width:50px;

  @media (max-width: 624px) {
  display: flex;
  }
`;

export const Menu = styled.img`
  height:20px;
`;

export const Footers = styled.footer `
  display:flex;
  justify-content: space-between;
  background-color: #F0572D;
  color:white;
  padding: 24px;
  width: 100%;
  height: 58px;
  margin-top:100%;
 
`;

export const AuthRigth = styled.div`
  display:flex;

  @media (max-width: 624px) {
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

  @media (max-width: 624px) {
    display: none;
  }
`;
export const FaceBook = styled.img`
  height:20px;
`;
export const LinedIn = styled.img`
  height:20px;
`;
export const  Twetter= styled.img`
height:20px;
`;
export const Instagram = styled.img`
  height:20px;
`;
