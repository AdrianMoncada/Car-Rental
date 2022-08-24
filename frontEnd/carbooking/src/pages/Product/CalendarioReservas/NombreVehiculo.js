import React, { useState } from "react";
import { useParams } from "react-router-dom";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import  UserProvider  from "../../../components/Context/UserContext";

const NombreVehiculo = () => {
  const [dataNombre] = useState([]);
  useParams();
  const nombre= () => {
    if (dataNombre.length === 0) {
      return (<>
             
            </>
      );
    } else {
      return (
        <>
        <h2>{dataNombre.nombre}</h2>
        </>
      );
    }
  };

  return (
    <>
      <div className="headerProducto">
        <div>
          {nombre()}
        </div>
    </div>
    </>
  );
};

export default NombreVehiculo;