import React from "react";
import {Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";

import Menum from "./Menu/menu";
import {
  Headers,
  ButtonSign,
  ContainerBtn,
  Icon,
  ContainerIcon,
  ContainerMenu,
} from "../pages/home/home.styles";
import ModalRegister from "../pages/Register/ModalRegister";

const Header = ({ mostrarModal, cerrarModal, usuario, setUsuario, mostrarModalRegister, cerrarModalRegister, mostrarRegister }) => {

 


  const handleClick = () => {
    setUsuario({ ...usuario, acceso: false });
    cerrarModal();
  };

  return (
    <>
    <Headers>
      <ContainerIcon>
        <Link to="/"><Icon src="/per2.png" alt='morgamlogo' /></Link>
        <p>Tu camino, tus reglas.</p>
      </ContainerIcon>

      <ContainerMenu>
        <Menum
          usuario={usuario}
          mostrarModal={mostrarModal}
          setUsuario={setUsuario}
          cerrarModal={cerrarModal}
          handleShowRegister={mostrarModalRegister}
        />
      </ContainerMenu>

      <ContainerBtn>
       
        {usuario?.acceso ? (
          <>
            <Avatar>
            {usuario.name.substr(0, 1)}
            </Avatar>

            <div> Hola, {usuario.name}</div>
            <ButtonSign onClick={() => handleClick()}>
              <p>Cerrar</p>
            </ButtonSign>
          </>
        ) : (
          <>
          <ButtonSign onClick={() => mostrarModalRegister()}>Crear cuenta</ButtonSign>
          <ButtonSign onClick={() => mostrarModal()}>Iniciar sesion</ButtonSign>
          </>
        )}
      </ContainerBtn>
    </Headers>
    {/*Importación del ModalRegister */}
    <ModalRegister setUsuario={setUsuario} toggleModal= {mostrarModal} showModalRegister={mostrarRegister} handleCloseModalRegister={cerrarModalRegister}>
    </ModalRegister>
    </>
  );
};

export default Header;
