import { React, useState} from "react";
import ciudades from "../helpers/ciudades";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt, FaSearchLocation} from 'react-icons/fa';

// Estilos 
import { BrowserContainer, 
         SelectContainer,
         Select,
         CheckInContainer,
         CheckOutContainer,
         Button,
         ButtonContainer       
        } from "./banner.styles";
import "../banner/banner.css";

const Banner = () => {
  // define check-in and check-out state
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  // define handler change function on check-in date
  const handleCheckInDate = (date) => {
    setCheckInDate(date);
    setCheckOutDate(null);
  };

  // define handler change function on check-out date
  const handleCheckOutDate = (date) => {
    setCheckOutDate(date);
  };





  return (
    <BrowserContainer>
      <h4>Alquila tu vehiculo</h4>
      
        <SelectContainer>
        <FaSearchLocation className="locationIcon"/>
          <Select>
            {ciudades.map((ciudad) => {
              return <option value={ciudad.value}>{ciudad.name}</option>;
            })}
          </Select>
        </SelectContainer>
        <CheckInContainer>
          <FaCalendarAlt className="iconCheck"/>
          <DatePicker className="checkIn"
            placeholderText="Fecha de recogida"
            selected={checkInDate}
            minDate={new Date()}
            onChange={handleCheckInDate}
          />
        </CheckInContainer>
        <CheckOutContainer>
        <FaCalendarAlt className="iconCheck"/>
          <DatePicker
            className="checkOut"
            placeholderText="Fecha de entrega"
            selected={checkOutDate}
            minDate={checkInDate}
            onChange={handleCheckOutDate}
          />
        </CheckOutContainer>
        <ButtonContainer>
          <Button> Buscar </Button>
        </ButtonContainer>
     
    </BrowserContainer>
  );
};

export default Banner;
