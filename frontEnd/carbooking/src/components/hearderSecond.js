import React from 'react';
import { Link } from 'react-router-dom';
import {
   Headers, 
   Icon, ContainerIcon
} from '../pages/home/home.styles';


const HeaderSecond = () => {
 
   return (
      <Headers>
         <ContainerIcon>
            <Link to="/home"><Icon src="/per2.png" alt='morgamlogo' /></Link>
            <p>Tu camino, tus reglas</p>
         </ContainerIcon>
        
      </Headers>

   )
}

export default HeaderSecond