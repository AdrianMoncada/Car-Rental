import React from 'react'
import "../Error/Error.css";
import { FaSearch} from 'react-icons/fa';
const Error = () => {
  return (
    <div className='fondo'>
        <div class="loader"> 
        <FaSearch style={{ color:"#FCA311", fontSize: "100px" }}/> 
        </div>
        <h3 className=''> Página no encontrada </h3>
    </div>
  )
}

export default Error