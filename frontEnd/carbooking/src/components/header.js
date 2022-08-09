import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
   Headers, ButtonSign, ContainerBtn,
   Icon, ContainerIcon, ContainerMenu,
   Menu, Icon2, ContainerIcon2
} from '../pages/home/home.styles';


const Header = () => {
   const navigate = useNavigate();
   return (
      <Headers>
         <ContainerIcon>
            <Link to="/home"><Icon src="/logo1.png" alt='digitlB' /></Link>
            <p>Tu camino, tus reglas </p>
         </ContainerIcon>
         <ContainerIcon2>
            <Link to="/home"><Icon2 src="/logo 5.png" alt='digitlB' /></Link>

         </ContainerIcon2>
         <ContainerMenu>
            <Menu src="/menu.png" alt='digitlB' />
         </ContainerMenu>

         <ContainerBtn>
            <ButtonSign onClick={() => navigate("signup")}>Crear cuenta</ButtonSign>
            <ButtonSign onClick={() => navigate("signin")}>Iniciar sesion</ButtonSign>

         </ContainerBtn>
      </Headers>

   )
}

export default Header