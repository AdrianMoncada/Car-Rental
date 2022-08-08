import React from 'react';
import { Link } from 'react-router-dom';
import { Headers,ButtonSign,ContainerBtn,
        Icon,ContainerIcon,ContainerMenu,
        Menu,Icon2,ContainerIcon2 } from '../pages/home/home.styles';
//import {LoginScreen } from 'component/Forms/FormLogin/LoginScreen.jsx'

const Header = () => {
    return (
      <Headers>
          <ContainerIcon>
             <Icon src="/logo1.png" alt='digitlB'/>
            
             <p>Tu camino, tus reglas </p>
          </ContainerIcon>
          <ContainerIcon2>
          <Icon2 src="/logo 5.png" alt='digitlB'/>

          </ContainerIcon2>
          <ContainerMenu>
             <Menu src="/menu.png" alt='digitlB'/>
          </ContainerMenu>
        
          <ContainerBtn>
               <ButtonSign>Crear cuenta</ButtonSign>
               <Link to="/login">
                  <ButtonSign>Iniciar sesion</ButtonSign>
               </Link>
          </ContainerBtn>
      </Headers>

    )
}

export default Header