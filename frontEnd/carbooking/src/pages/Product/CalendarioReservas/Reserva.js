import React from "react";
import CalendarioReserva from "../../../pages/Product/CalendarioReservas/CalendarioReserva";
//import Header from "../../../components/header";
//import HeaderSecond from "../../components/hearderSecond";
//import Footer from '../../components/footer';
// import NombreVehiculo from "../../../pages/Product/CalendarioReservas/NombreVehiculo";

export default function Reserva() {
  return (
    <>
      <header>
      </header>
      <body>
        <section>
            <div className="tablasDeInformacion">
                <div className="completarDatos">
                    <div>
                    <h2>Seleccioná tu fecha de reserva</h2>

                    <CalendarioReserva />
                    <h2>Agregar tus fechas de viaje para optener precios exactos</h2>
                    <button>Iniciar reserva</button>
                    </div>
                </div>
            </div> 
        </section>
      </body>
      <footer>
      </footer>
    </>
  );
}