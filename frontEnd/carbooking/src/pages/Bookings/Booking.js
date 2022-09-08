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
              <FormBooking/>
              <Footer />
            </Container>
          
      </div>
    
    
           
    
    
    )
}

export default Booking