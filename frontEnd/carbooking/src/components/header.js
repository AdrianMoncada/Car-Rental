import React from "react";
import { useNavigate, Link } from "react-router-dom";
import Menum from './menu'
import {
  Headers,ButtonSign,ContainerBtn,
  Icon,ContainerIcon,ContainerMenu,
} from "../pages/home/home.styles";



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
