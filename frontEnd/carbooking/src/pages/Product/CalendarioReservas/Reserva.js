import React from "react";
import CalendarioReserva from "../../../pages/Product/CalendarioReservas/CalendarioReserva";

export default function Reserva() {
  return (
    <>
            <div style={{width:"98%", padding: "15px", backgroundColor: "#F5B041", borderRadius: "20px", opacity: "0.97", color: "#FFFFFF",}}>
                    <div>
                    <h2>Seleccioná tu fecha de reserva</h2>
                    <CalendarioReserva/>
                    <h2>Agregar tus fechas de viaje para obtener precios exactos</h2>
                    <button style={{backgroundColor:"#14213D", borderRadius: "8px", color: "#fff", width: "120px", height: "50px", border: "1px solid #14213D" }}>Iniciar reserva</button>
                    </div>
            </div> 
    </>
  );
}