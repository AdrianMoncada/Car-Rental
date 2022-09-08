import React from 'react';


import CalendarioReserva from '../Product/CalendarioReservas/CalendarioReserva'
import Hora from "../Product/CalendarioReservas/Hora"
import {Container,
        GridContainer,
        PersonalData,
        Calendar,
        Schedule,
        ReservedProduct,
        Policies,
        InputsContainer,
        Input,
        ImagenQuemada,
        Button,
        TituloDetalleReserva,
        ParrafoDetalle,
        Descripcion,
        ContainerDescricionDetalleReserva
      } from "./Booking.styled"

        
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
            text:'Completa todos los campos',
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
          <InputsContainer>
          <label htmlFor="firstName">Nombre</label>
          <Input id="firstName" name="firstName" placeholder="Nombre" />
          </InputsContainer>

          <InputsContainer>
          <label htmlFor="lastName">Apellido</label>
          <Input id="lastName" name="lastName" placeholder="Apellido" />
          </InputsContainer>

          <InputsContainer>
          <label htmlFor="email">Correo electronico</label>
          <Input id="email" name="email" placeholder="correo@correo.com" type="email" />
          </InputsContainer>

          <InputsContainer>
          <label htmlFor="city">Ciudad</label>
          <Input id="city" name="city" placeholder="Ciudad" />
          </InputsContainer>
          </PersonalData>
          <Calendar>
            <h2>Seleccioná tu fecha de reserva</h2>
            <CalendarioReserva dataBooking={dataBooking} setDataBooking={setDataBooking} dataHour={dataHour} dataProduct={dataProduct}/>
          </Calendar>

          <Schedule>
            <p>Tu auto estará listo a la hora programada </p>
            <h6>Indica tu horario estimado de llegada </h6>

            <Hora dataBooking={dataBooking} setDataBooking={setDataBooking} setDataHour={setDataHour}/>
          </Schedule>
          <ReservedProduct>
            <TituloDetalleReserva>Detalle de reserva </TituloDetalleReserva>
            <ImagenQuemada src="https://morgam-images.s3.us-east-2.amazonaws.com/chevrolet-sail-00.png" alt="" />
             
             <ContainerDescricionDetalleReserva>
             <Descripcion> Descripción del auto </Descripcion>
             <ParrafoDetalle>El Chevrolet Sail es un sedán con líneas aerodinámicas y un frontal moderno y elegante. Consiste en una propuesta compacta que sorprende por la amplitud de sus espacios interiores y sus 400 litros de capacidad de capacidad volumetrica en el baúl. Llantas y Rines. Parrilla frontal de doble división.</ParrafoDetalle>
             </ContainerDescricionDetalleReserva>
            <Button type="button" onClick={() => handleClick()} >Iniciar reserva</Button>
          </ReservedProduct>
          <Policies>
            
            <h5>Políticas</h5>

        
                  <li>
                    Las multas o cantidades asimiladas por infracciones de
                    tráfico o infracciones de leyes durante el período de
                    alquiler son responsabilidad de los conductores del
                    vehículo.
                  </li>
                  <li>
                    Conservar el vehículo en buen estado y no exponerlo
                    potenciales riesgos.
                  </li>
                  <li>
                    No realizar actividades con fines de subarriendo del
                    vehículo, ni transportar personas o mercancías que infrinjan
                    la Ley.
                  </li>
         
          </Policies>
        </GridContainer>
    
    </Container>
  )
}



export default FormBooking