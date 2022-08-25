import React from "react";
import { useNavigate, Link } from "react-router-dom";
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

const Header = ({ mostrarModal, cerrarModal, usuario, setUsuario }) => {
  const navigate = useNavigate();

 

  const handleClick = () => {
    setUsuario({ ...usuario, acceso: false });
    cerrarModal();

  };

  return (
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
          <ButtonSign onClick={() => navigate("signup")}>Crear cuenta</ButtonSign>
          <ButtonSign onClick={() => mostrarModal()}>Iniciar sesion</ButtonSign>
          </>
        )}
      </ContainerBtn>
    </Headers>
  );
};

export default Header;
