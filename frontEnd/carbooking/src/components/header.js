import React from "react";
import { useNavigate, Link } from "react-router-dom";
import Menum from './Menu/menu';
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
    return (
       <Headers>
          <ContainerIcon>
             <Link to=""><Icon src="/per2.png" alt='morgamlogo' /></Link>
             <p>Tu camino, tus reglas ahora.</p>
          </ContainerIcon>
        
          <ContainerMenu>
          <Menum usuario={usuario} mostrarModal={mostrarModal} setUsuario={setUsuario} cerrarModal={cerrarModal} />
          </ContainerMenu>

          <ContainerBtn>
          <ButtonSign onClick={() => navigate("signup")}>Crear cuenta</ButtonSign>
        {usuario.acceso ? (
          <>
            <div>Bienvenido {usuario.nombre}</div>
            <ButtonSign
              onClick={() => {
                setUsuario((user) => {
                  return {
                    ...user,
                    acceso: false,
                  };
                });
                cerrarModal();
              }}
            >
              <p>Cerrar</p>
            </ButtonSign>
          </>
        ) : (
          <ButtonSign onClick={() => mostrarModal()}>Iniciar sesion</ButtonSign>
        )}
          </ContainerBtn>
       </Headers>

    )
 }

export default Header
