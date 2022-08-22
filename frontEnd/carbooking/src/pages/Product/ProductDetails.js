import React, { useState } from "react";
import Header from "../../components/header";
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
  PhotoOne,
  PhotoTwo,
  PhotoThree,
  PhotoFour,
  PhotoFive,
  VerMas,
} from "../Product/ProductDetails.Styles";

const ProductDetails = () => {
  const [modalState, setModalState] = useState(false);


  return (
    <div>
      <Container>
        <Header />
        <Main>
          <InfoProduct>
            <h2>Econ omico</h2>
            <p>Renault Logan</p>
          </InfoProduct>
          <IconArrow>
            <p>esto es una flecha</p>
          </IconArrow>
        </Main>

        <Ubication>
          <InfoUbication>
            <p>El vehiculo se encuentra en la ciudad de Cordoba</p>
          </InfoUbication>
          <Qualification>
            <p>muy bueno con 5 estrellas egm-tnzk-ess </p>
          </Qualification>
        </Ubication>

        <Galery>
          <PhotoOne> </PhotoOne>
          <PhotoTwo> </PhotoTwo>
          <PhotoThree> </PhotoThree>
          <PhotoFour> </PhotoFour>

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
        <Footer />
      </Container>
    </div>
  );
};

export default ProductDetails;
