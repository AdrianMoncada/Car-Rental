import { React} from "react";
//import "react-datepicker/dist/react-datepicker.css";
//import es from "date-fns/locale/es";
import Datepicker from "../DatePicker/Datepicker";
//import DateRangePicker from "react-bootstrap-daterangepicker";
//import "bootstrap-daterangepicker/daterangepicker.css";
//import { Button } from "react-bootstrap";


export default function calendariobanner({startDate, endDate, setDateRange}) {
    
      //registerLocale("es", es);
      //setDefaultLocale("es");

  return (
    <div>
        <Datepicker
            placeholderText=" Check in - Check out"
            isInputWithCalendar={true}
            className="inputBanner"
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            onChange={(update) => {
              setDateRange(update);
            }}
            minDate={new Date()}
            locale="es"
            monthsShown={2}
            dateFormat="yyyy/M/d"
            changeMonth
        />
    </div>
  )
}
