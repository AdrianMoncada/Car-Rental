import React, { useState, useEffect }  from 'react'
import { useParams, Link } from "react-router-dom";
import { Calendar, GridContainer, PersonalData, Policies, ReservedProduct, Schedule } from './Booking.styled'
import {
    Container,
    Main,
    IconArrow,
    InfoProduct,
  } from "../Product/ProductDetails.Styles";

import Header from '../../components/header'
import Footer from '../../components/footer'
import { FaChevronCircleLeft } from "react-icons/fa";


const Booking = () => {
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

  console.log(dataProduct);

    return (
        <div>
        
            <Container>
              <Header />
  
              <Main>
                <InfoProduct>
                  <h2>categoria</h2>
                  <h4>producto</h4>
                </InfoProduct>
                <IconArrow>
                  <Link to="/">
                    <FaChevronCircleLeft
                      style={{ color: "#FCA311", fontSize: "50px" }}
                    />
                  </Link>
                </IconArrow>
              </Main>
              <GridContainer>
                <PersonalData>escribe tus datos aqui</PersonalData>
                <Calendar>este es el calendario doble</Calendar>
                <ReservedProduct>este es el producto reservado</ReservedProduct>
                <Policies>politicas de la empresa</Policies>
                <Schedule>horario de entrega y recogida</Schedule>
            </GridContainer>
  
      
              <Footer />
            </Container>
          
      </div>
    
    
           
    
    
    )
}

export default Booking