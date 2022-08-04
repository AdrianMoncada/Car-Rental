import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 100%;
min-height: 100vh;
background: rgb(34,193,195);
background: linear-gradient(0deg, rgba(44,55,195,1) 0%, rgba(232,228,98,1) 65%, rgba(221,253,45,1) 100%);
display: flex;
justify-content: center;
text-align: center;
align-items: center;
gap: 20px;
flex-wrap: wrap;
`;

export const Header = styled.header`
 display: flex;
 width: 100%;
 height: 80px;
 background: #FFFFFF;
 justify-content: space-between;
 border-bottom: 1px solid #c7c7c7;
`;

export const ContainerIcon = styled.div`
background: red;
display: flex;
justify-content:space-arround;
color: white;
margin-top:30px;
padding-right:20px;
width:400px;
margin-left:40px;
margin-top 10px;
`;

export const Icon = styled.img`
height:50px;
`;

export const ContainerBtn = styled.div`

display: flex;
justify-content:space-between;
margin-top:30px;
padding-right:40px;
width:400px;
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

export const Footer = styled.footer `
  background-color: #F0572D;
  color:white;
  padding: 24px;
  width: 100%;
  height: 58px;
  margin-top:100%;
`;