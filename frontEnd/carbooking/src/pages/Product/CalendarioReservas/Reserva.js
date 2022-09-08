import React, {useState, useEffect} from "react";
import CalendarioReserva from "../../../pages/Product/CalendarioReservas/CalendarioReserva";
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
//import Formulario from "./Formulario"

export default function Reserva() {
  const navigate = useNavigate
  const { id } = useParams();
  const [dataProduct, setDataProduct] = useState(null);
  useEffect(() => {
    const request = async () => {
      const response = await fetch(`http://18.219.33.103:8080/products/${id}`);
      const result = await response.json();
      setDataProduct(result);
    };
    request();
  }, [id]);

  return (
 <div> 
     {dataProduct &&
        dataProduct?.map((product) => (

            <div style={{width:"98%", padding: "15px", backgroundColor: "#F5B041", borderRadius: "20px", opacity: "0.97", color: "#FFFFFF",}}>
                    <div>
                    <h2>Seleccioná tu fecha de reserva</h2>
                    <CalendarioReserva/>
                    <h2>Agregar tus fechas de viaje para obtener precios exactos ${product.name}</h2>
                    <button onClick={() => navigate(`/product/{product.id}/reserva`)} 
                    style={{backgroundColor:"#14213D", borderRadius: "8px", color: "#fff", width: "120px", height: "50px", border: "1px solid #14213D" }}>Iniciar reserva</button>
                    </div>
                    <div>FormBooking</div>
            </div> 
            ))} 
  </div>

    );
  
}