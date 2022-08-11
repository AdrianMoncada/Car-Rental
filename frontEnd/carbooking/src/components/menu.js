import React from 'react'
import './menustyles.css';

import { useNavigate } from 'react-router-dom';

const Menum = () => {
    const navigate = useNavigate();
  return (
      <div>
         <input type="checkbox" id="abrir-cerrar" name="abrir-cerrar" value=""/>
         <label for="abrir-cerrar">&#9776; 
         <span class="abrir"></span>
         <span class="cerrar"></span>
         </label>
         <div id="sidebar" class="sidebar">
         <ul class="menu">
         <li ><button class = "primero" onClick={() => navigate("signup")}>Crear cuenta</button></li>
         <li><button class = "primero" onClick={() => navigate("signin")}>Iniciar sesion</button></li>
         
       
         </ul>
         <div>
        
         </div>
         </div>
      </div>
    
  )
}
export default Menum