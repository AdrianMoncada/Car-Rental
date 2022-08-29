import React, {useState} from "react";
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

const Header = ({ mostrarModal, cerrarModal, usuario, setUsuario, }) => {

   // Logica Modal Register
    const [showModalRegister, setShowModalRegister] = useState(false);
    const handleCloseRegister = () => setShowModalRegister(false);
    const handleShowRegister = () => setShowModalRegister(true);
    // Cierra logica modal register 


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
          handleShowRegister={handleShowRegister}
        />
      </ContainerMenu>

      <ContainerBtn>
       
        {usuario?.acceso ? (
          <>
            <Avatar>
            {usuario.nombre.substr(0, 1)}
            </Avatar>
            <div>Bienvenido {usuario.nombre}</div>
            <ButtonSign onClick={() => handleClick()}>
              <p>Cerrar</p>
            </ButtonSign>
          </>
        ) : (
          <>
          <ButtonSign onClick={() => {handleShowRegister()}}>Crear cuenta</ButtonSign>
          <ButtonSign onClick={() => mostrarModal()}>Iniciar sesion</ButtonSign>
          </>
        )}
      </ContainerBtn>
    </Headers>
    {/*Importación del ModalRegister */}
    <ModalRegister showModalRegister={showModalRegister} handleCloseModalRegister={handleCloseRegister}>
    </ModalRegister>
    </>
  );
};

export default Header;
