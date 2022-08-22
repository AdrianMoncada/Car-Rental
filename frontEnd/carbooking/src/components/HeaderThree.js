import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
   Headers, 
   Icon, 
   ContainerIcon,
   ContainerBtn,
   ButtonSign
} from '../pages/home/home.styles';



const HeaderThree = () => {
   const navigate = useNavigate();
   return (
      <Headers>
         <ContainerIcon>
            <Link to="/home"><Icon src="/per2.png" alt='morgamlogo' /></Link>
            <p>Tu camino, tus reglas</p>
         </ContainerIcon>
         <ContainerBtn>
         <ButtonSign onClick={() => navigate("/home/signup")}>Crear cuenta</ButtonSign>
          </ContainerBtn>
      </Headers>

   )
}

export default HeaderThree