import React, { useState,useEffect } from "react";
import { useParams} from 'react-router-dom'
// import Header from "../../components/header";
import Footer from "../../components/footer";
import Modal from "../../components/Modal/Modal";
import Carousel from "../../components/Modal/Slider/Slider";



//Import for carousel
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import {
  Container,
  Main,
  Ubication,
  IconArrow,
  InfoProduct,
  InfoUbication,
  Qualification,
  BlockDescription,
  BlockCaracteristics,
  BlockPolicies,
  Text,
  Galery,
  PhotoFive,
  VerMas,Image,
} from "../Product/ProductDetails.Styles";
import Reserva from "./CalendarioReservas/Reserva";

const ProductDetails = () => {
  const [modalState, setModalState] = useState(false);

  const { id } = useParams();
  const [dataProduct, setDataProduct] = useState(null);
  useEffect(() => {
    const request = async () => {
      const response = await fetch(`http://18.219.33.103:8080/products/${id}`);
      const result = await response.json();
      setDataProduct(result);
    }
    request();
  }, [id]);

console.log('====================================');
console.log(dataProduct);
console.log('====================================');
  return (
    <div>
      {
        dataProduct &&
        dataProduct.map(product =>(

          <Container>
          {/* <Header /> */}
          
          <Main>
           
            <InfoProduct>
              <h2>{product.category.name}</h2>
              <p>{product.name}</p>
            </InfoProduct>
            <IconArrow>
              <p>esto es una flecha</p>
            </IconArrow>
          </Main>
  
          <Ubication>
            <InfoUbication>
              <p>El vehiculo se encuentra en la ciudad de {product.city.name}</p>
            </InfoUbication>
            <Qualification>
              <p>muy bueno con 5 estrellas egm-tnzk-ess </p>
            </Qualification>
          </Ubication>
  
          <Galery>
          <Image 
          area="2 / 1 / 4 / 3 "
          width = "100%"
          heigth ="100%"
          border="5rem"></Image>
          <Image 
          area="2 / 3 / 3 / 4"
          width = "100%"
          heigth ="200px"
          border="2rem"></Image>
          <Image 
          area="2 / 4 / 3 / 5"
          width = "100%"
          heigth ="200px"
          border="2rem"></Image>
          <Image 
          area="3 / 3 / 4 / 4"
          width = "100%"
          heigth ="200px"
          border="2rem"></Image>
  
         
            <PhotoFive>
              <VerMas onClick={() => setModalState(!modalState)}>
                {" "}
                Ver más{" "}
              </VerMas>
              <Modal view={modalState} changeView={setModalState}>
               <Carousel> </Carousel>
              </Modal>
            </PhotoFive>
          </Galery>
  
          <BlockDescription>
            <h2>descripcion del producto</h2>
  
            <Text>
              El 'MINI One' incorpora un motor de 1.4 litros de cilindrada de
              inyección indirecta y 75 o 95 CV. Los 'MINI Cooper' y 'MINI Cooper
              S' poseen un 1.6 litros, el primero con Diana Ramos15:31 inyección
              indirecta y 120 CV, y el segundo con inyección directa,
              turbocompresor y 184 CV.
            </Text>
          </BlockDescription>
          <BlockCaracteristics>
            <h2>caracterisitcas del producto</h2>
            <Text>El auto cuenta con aire acondicionado</Text>
          </BlockCaracteristics>
          <BlockPolicies>
            <h2>politicas</h2>
            <Text>
              No subir mascotas al auto salvo que sea en un porta mascotas
              <br></br>
              No fumar dentro del vehiculo
            </Text>
          </BlockPolicies>
          <Reserva/>
          <Footer />
        </Container>
            
          ))}
     

    </div>
  );
};

export default ProductDetails;
