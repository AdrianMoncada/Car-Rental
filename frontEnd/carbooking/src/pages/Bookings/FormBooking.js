import React from 'react'

import CalendarioReserva from '../Product/CalendarioReservas/CalendarioReserva'
import Hora from "../Product/CalendarioReservas/Hora"
import {Container,GridContainer, PersonalData,Calendar,Schedule,ReservedProduct,Policies} from "./Booking.styled"


const FormBooking = () => {
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
            <CalendarioReserva />
          </Calendar>

          <Schedule>
            <h2>Indica tu hora de llegada </h2>
            <Hora />
          </Schedule>
          <ReservedProduct>
          <button type="submit" style={{ backgroundColor: "#14213D", borderRadius: "8px", color: "#fff", width: "120px", height: "50px", border: "1px solid #14213D" }}>Iniciar reserva</button>
          </ReservedProduct>
          <Policies>politicas</Policies>
        </GridContainer>
    
    </Container>
  )
}



export default FormBooking