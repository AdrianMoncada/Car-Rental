import React from "react";
import CalendarioReserva from "./CalendarioReserva";
import Hora from "./Hora";

export default function Formulario() {

   return(<>
        <form>
            <div>
                <div>
                    <label for="nombre">Nombres:</label>
                    <br />
                    <input type="text" name="nombre" id="nombre" disabled />
                </div>
                <div>
                    <label for="apellido">Apellido:</label>
                    <br />
                    <input type="text" name="apellido" id="apellido" disabled />
                </div>
                <div>
                    <label for="email">Email:</label>
                    <br />
                    <input type="email" name="email" id="email" disabled />
                </div>
                <div>
                    <label for="city">Ciudad:</label>
                    <br />
                    <input type="text" name="city" id="city" required />
                </div>
            </div>
            <div>
            <h2>Seleccioná tu fecha de reserva</h2>
                <CalendarioReserva/>
                <h2>Agregar tus fechas de viaje para obtener precios exactos</h2>
            </div>
            <h2>Indica tu hora de llegada estimada</h2>
            <div>
                <Hora/>
            </div>
          <button type="submit" style={{backgroundColor:"#14213D", borderRadius: "8px", color: "#fff", width: "120px", height: "50px", border: "1px solid #14213D" }}>Iniciar reserva</button>
          
        </form>
    </>);
}
