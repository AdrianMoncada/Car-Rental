import React, {useContext} from "react";
import {useNavigate} from 'react-router-dom';
import CalendarioReserva from "../../../pages/Product/CalendarioReservas/CalendarioReserva";
// import Swal from "sweetalert2"
import AppContext from "../../../Context/AppContext";



export default function Reserva({id}) {



  const navigate = useNavigate();


  const {...headersProps} = useContext(AppContext);
  console.log(headersProps.setUsuario.acceso);
  // const usuarioAcceso = headersProps.setUsuario;
  // const usuario = headersProps.usuario.acceso;

  // const tokenUsuario = () => {
  //   if(usuario){
  //     navigate(`/reserva/${id}`)
  //   }else{
  //     navigate("/")
  //   }
  // };

  return (
    <>
            <div style={{width:"98%", padding: "15px", backgroundColor: "#F5B041", borderRadius: "20px", opacity: "0.97", color: "#FFFFFF",}}>
                    <div>
                    <h2>Seleccioná tu fecha de reserva</h2>
                    <CalendarioReserva/>
                    <h2>Agregar tus fechas de viaje para obtener precios exactos</h2>
                    <button onClick={() => navigate(`/reserva/${id}`)}
                    style={{backgroundColor:"#14213D", borderRadius: "8px", color: "#fff", width: "120px", height: "50px", border: "1px solid #14213D" }}>Iniciar reserva</button>
                    </div>
            </div>
    </>
  );
}