import React from 'react'
import CalendarioReserva from '../Product/CalendarioReservas/CalendarioReserva';
import Hora from '../Product/CalendarioReservas/Hora';
import { Calendar, GridContainer, PersonalData, Policies, ReservedProduct, Schedule } from './Booking.styled'


const FormBooking = () => {
  
  return(<>
        <form>
            <GridContainer>
              <PersonalData>               
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
                </PersonalData>
            
  
                <Calendar><h2>Seleccioná tu fecha de reserva</h2>
                  <CalendarioReserva/>
                </Calendar>
 
                <Schedule><h2>Indica tu hora de llegada estimada</h2>
                <Hora/></Schedule>

              <ReservedProduct><button type="submit" style={{backgroundColor:"#14213D", borderRadius: "8px", color: "#fff", width: "120px", height: "50px", border: "1px solid #14213D" }}>Iniciar reserva</button></ReservedProduct>           
          
          </GridContainer>
        </form>
    </>);
}



export default FormBooking