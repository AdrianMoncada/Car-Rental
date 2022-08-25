import React, { useState, useContext } from "react";
import Media from "react-media";
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import es from "date-fns/locale/es";
import "react-datepicker/dist/react-datepicker.css";
import { Container, Row, Col } from "react-bootstrap";
import FechaRangoContextProvider from "../../../Context/FechaRangoContextProvider";

import { useParams } from "react-router-dom";
// import axiosConnection from "../helpers/axiosConnection";

const CalendarioReserva = () => {
    useContext(FechaRangoContextProvider);
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    const { id } = useParams();

    const [dataReservas] = useState([]);
   

    const getFechasReservadas = () => {
        const reservas = dataReservas
        .filter((reserva) => reserva.producto?.id === id)
        .map((fecha) => ({
            start: new Date(fecha.fechaInicial),
            end: new Date(fecha.fechaFinal),
        }));
        return reservas;
    };

    console.log("getFechasReservadas: ", getFechasReservadas());

    registerLocale("es", es);
    setDefaultLocale("es");

  return (
    <>
      <Container fluid className="datePickerContainer">
        <Row>
          <Col>
            <Media query="(max-width:460px)">
              {(matches) => {
                return matches ? (
                  <DatePicker
                    calendarClassName="bordeCalendario"
                    excludeDateIntervals={getFechasReservadas()}
                    excludeDates={getFechasReservadas()?.map(
                      (date) => date.end
                    )}
                    selected={startDate}
                    selectsRange={true}
                    startDate={startDate}
                    endDate={endDate}
                    minDate={new Date()}
                    onChange={(update) => {
                      setDateRange(update);
                    }}
                    monthsShown={1}
                    inline
                  />
                ) : (
                  <DatePicker
                    calendarClassName="bordeCalendario"
                    excludeDateIntervals={getFechasReservadas()}
                    excludeDates={getFechasReservadas()?.map(
                      (date) => date.end
                    )}
                    selectsRange={true}
                    startDate={startDate}
                    endDate={endDate}
                    minDate={new Date()}
                    onChange={(update) => {
                      setDateRange(update);
                    }}
                    monthsShown={2}
                    inline
                  />
                );
              }}
            </Media>
          </Col>
        </Row>
      </Container>
    
    </>
  );
};

export default CalendarioReserva;