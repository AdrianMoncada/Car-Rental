<<<<<<< HEAD
import React from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Headers,
  ButtonSign,
  ContainerBtn,
  Icon,
  ContainerIcon,
  ContainerMenu,
  Menu,
  Icon2,
  ContainerIcon2,
} from "../pages/home/home.styles";
=======
import React from 'react';
import Menum from './menu';
import { useNavigate, Link } from 'react-router-dom';
import {
   Headers, ButtonSign, ContainerBtn,
   Icon, ContainerIcon, ContainerMenu
} from '../pages/home/home.styles';
>>>>>>> 8311b198afe9980a9b348f518a4a39dee80d20e3

const Header = ({ mostrarModal, usuario }) => {
  const navigate = useNavigate();
  return (
    <Headers>
      <ContainerIcon>
        <Link to="/home">
          <Icon src="/per2.png" alt="digitlB" />
        </Link>
        <p>Tu camino, tus reglas</p>
      </ContainerIcon>
      <ContainerIcon2>
        <Link to="/home">
          <Icon2 src="/per2.png" alt="digitlB" />
        </Link>
      </ContainerIcon2>
      <ContainerMenu>
        <Menu src="/menu.png" alt="digitlB" />
      </ContainerMenu>

<<<<<<< HEAD
      <ContainerBtn>
        <ButtonSign onClick={() => navigate("signup")}>Crear cuenta</ButtonSign>
        {usuario.acceso ? (
          <>
            Bienvenido {usuario.nombre}
            <ButtonSign onClick={() => mostrarModal()}>Cerrar ses</ButtonSign>
          </>
        ) : (
          <ButtonSign onClick={() => mostrarModal()}>Iniciar sesion</ButtonSign>
        )}
      </ContainerBtn>
    </Headers>
  );
};

export default Header;
=======
const Header = () => {
   const navigate = useNavigate();
   return (
      <Headers>
         <ContainerIcon>
            <Link to="/home"><Icon src="/per2.png" alt='morgamlogo' /></Link>
            <p>Tu camino, tus reglas</p>
         </ContainerIcon>
        
         <ContainerMenu>
         <Menum/>
         </ContainerMenu>

         <ContainerBtn>
            <ButtonSign onClick={() => navigate("signup")}>Crear cuenta</ButtonSign>
            <ButtonSign onClick={() => navigate("signin")}>Iniciar sesion</ButtonSign>

         </ContainerBtn>
      </Headers>

   )
}

export default Header
>>>>>>> 8311b198afe9980a9b348f518a4a39dee80d20e3
