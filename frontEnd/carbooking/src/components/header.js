import React from 'react';

import { Headers,ButtonSign,ContainerBtn,Icon,ContainerIcon } from '../pages/home/home.styles'

const Header = () =>{
    return (
  
      <Headers>
          <ContainerIcon>
             <Icon src="/logo1.png" alt='digitlB'/>
             <p>modificar eslogan</p>
          </ContainerIcon>
        
          <ContainerBtn>
             <ButtonSign>Crear cuenta</ButtonSign>
             <ButtonSign>Iniciar sesion</ButtonSign>
          </ContainerBtn>
      </Headers>

    )
}

export default Header