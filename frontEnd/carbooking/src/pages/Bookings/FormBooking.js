import React from 'react'

import CalendarioReserva from '../Product/CalendarioReservas/CalendarioReserva'
import Hora from "../Product/CalendarioReservas/Hora"
import {Container,GridContainer, PersonalData,Calendar,Schedule,ReservedProduct,Policies} from "./Booking.styled"
import Swal from "sweetalert2"


const FormBooking = ({dataBooking, setDataBooking, dataHour, setDataHour, dataProduct}) => {
  const handleClick = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify(dataBooking);

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://18.219.33.103:8080/reservations", requestOptions)
      .then(response => {if(response.ok){
        Swal.fire({
            title: 'Reserva exitosa',
            text:'Disfruta tu viaje',
            icon:'success'
        })
        console.log("respuesta: ", response)
        return response.json();

        //this  code send a screen alert   if confirm the alert your'e redirect to reservas for example
    }else if(response.ok !== true)
        Swal.fire({
            title: 'Lamentablemente la reserva no ha podido realizarse',
            text:'Por favor, intente más tarde',
            icon:'error'
        })})
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  };

  return (
    <Container>
        <GridContainer>
          <PersonalData>
          <h4>Completa tus datos</h4>
          <label htmlFor="firstName">Nombre</label>
          <input id="firstName" name="firstName" placeholder="Jane" />

          <label htmlFor="lastName">Apellido</label>
          <input id="lastName" name="lastName" placeholder="Doe" />

          <label htmlFor="email">Correo electronico</label>
          <input id="email" name="email" placeholder="jane@acme.com" type="email" />

          <label htmlFor="city">Ciudad</label>
          <input id="city" name="city" placeholder="Cali" />
          </PersonalData>
          <Calendar>
            <h2>Seleccioná tu fecha de reserva</h2>
            <CalendarioReserva dataBooking={dataBooking} setDataBooking={setDataBooking} dataHour={dataHour} dataProduct={dataProduct}/>
          </Calendar>

          <Schedule>
            <h2>Indica tu hora de llegada </h2>
            <Hora dataBooking={dataBooking} setDataBooking={setDataBooking} setDataHour={setDataHour}/>
          </Schedule>
          <ReservedProduct>
          <button type="button" onClick={() => handleClick()} style={{ backgroundColor: "#14213D", borderRadius: "8px", color: "#fff", width: "120px", height: "50px", border: "1px solid #14213D" }}>Iniciar reserva</button>
          </ReservedProduct>
          <Policies>politicas</Policies>
        </GridContainer>
    
    </Container>
  )
}



export default FormBooking