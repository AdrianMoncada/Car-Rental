import React, { useState, useEffect }  from 'react'
import { useParams, Link } from "react-router-dom"
import { FaChevronCircleLeft } from "react-icons/fa"
import {Container,Main,IconArrow,InfoProduct,} from "../Product/ProductDetails.Styles";

import Header from '../../components/header'
import Footer from '../../components/footer'
import FormBooking from './FormBooking';


const Booking = () => {
  const { id } = useParams();
  const [dataProduct, setDataProduct] = useState(null);
  useEffect(() => {
    const request = async () => {
      const response = await fetch(`http://18.219.33.103:8080/products/${id}`);
      const result = await response.json();
      setDataProduct(result[0]);
    };
    request();
  }, [id]);

  console.log(dataProduct);

  const [dataBooking, setDataBooking] = useState({
    startHour: "",
    startDate: "",
    endDate: "",
    user: {id: 1},
    product: {id: id}
  });

  const [dataHour, setDataHour] = useState("00:00:00");

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
              <FormBooking dataBooking={dataBooking} setDataBooking={setDataBooking} dataHour={dataHour} setDataHour={setDataHour} dataProduct={dataProduct} />
              <Footer />
            </Container>
          
      </div>
    
    
           
    
    
    )
}

export default Booking