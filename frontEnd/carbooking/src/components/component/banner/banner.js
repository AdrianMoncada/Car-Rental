import { React, useState} from "react";
import ciudades from "../helpers/ciudades";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
    <div>
      <h1>Alquila tu vehiculo</h1>
      <div>
        <div>
          <select>
            {ciudades.map((ciudad) => {
              return <option value={ciudad.value}>{ciudad.name}</option>;
            })}
          </select>
        </div>
        <div>
          <label>Check-in</label>
          <DatePicker
            selected={checkInDate}
            minDate={new Date()}
            onChange={handleCheckInDate}
          />
        </div>
        <div>
          <label>Check-out</label>
          <DatePicker
            selected={checkOutDate}
            minDate={checkInDate}
            onChange={handleCheckOutDate}
          />
        </div>
        <div>
            <button>Buscar</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
