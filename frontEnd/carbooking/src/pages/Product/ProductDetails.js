import React, { useState, useEffect, useContext} from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Modal from "../../components/Modal/Modal";
import Carousel from "../../components/Modal/Slider/Slider";
import { FaChevronCircleLeft } from "react-icons/fa";
import AppContext from "../../Context/AppContext";

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
  VerMas,
  Image,
  IconUbication,
} from "../Product/ProductDetails.Styles";
import { FaCar, FaDesktop, FaWifi, FaStar} from "react-icons/fa";
import { GiCarDoor, GiGps } from "react-icons/gi";
import Reserva from "./CalendarioReservas/Reserva";
import LoginModal from "../Login/LoginModal";
import ModalRegister from "../Register/ModalRegister";



const ProductDetails = () => {

   const {headersProps} = useContext(AppContext);
   console.log(headersProps);


  const [modalState, setModalState] = useState(false);

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

  //console.log(dataProduct);


  return (
    <div>
      {dataProduct &&
        dataProduct?.map((product) => (
          <Container>
            <Header headersProps={headersProps}  />
            <LoginModal  headersProps={headersProps} />
            <ModalRegister headersProps={headersProps} >
    </ModalRegister>
            <Main>
              <InfoProduct>
                <h2>{product.category.name}</h2>
                <h4>{product.name}</h4>
              </InfoProduct>
              <IconArrow>
                <Link to="/">
                  <FaChevronCircleLeft
                    style={{ color: "#FCA311", fontSize: "50px" }}
                  />
                </Link>
              </IconArrow>
            </Main>

            <Ubication>
              <InfoUbication>
  
                <p>
                  Ubicación: {product.city.name}  <IconUbication> <span class="ubication"></span></IconUbication>
                </p>
              </InfoUbication>

              <Qualification>  
                <p> Calificación: <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/> </p> 
              </Qualification>
            </Ubication>

            <Galery>
              <Image area="2 / 1 / 4 / 3 " heigth="100%" border="5rem">

                <img
                  border="5rem"
                  className="imagenApi"
                  src={product.images[0].url}
                  alt=""
                />
              </Image>
              <Image area="2 / 3 / 3 / 4" heigth="200px" border="2rem">
               
                <img
                  border="2rem"
                  className="imagenApi"
                  src={product.images[1].url}
                  alt=""
                />
              </Image>
              <Image area="2 / 4 / 3 / 5" heigth="200px" border="2rem">
                
                <img
                  border="2rem"
                  className="imagenApi"
                  src={product.images[2].url}
                  alt=""
                />
              </Image>
              <Image area="3 / 3 / 4 / 4" heigth="200px" border="2rem">
                {" "}
                <img
                  border="2rem"
                  className="imagenApi"
                  src={product.images[3].url}
                  alt=""
                />
              </Image>

              <Image area="3 / 4 / 4 / 5" heigth="200px" border="2rem">
                <img
                  border="2rem"
                  className="imagenApi"
                  src={product.images[4].url}
                  alt=""
                />
                <VerMas onClick={() => setModalState(!modalState)}>
                  Ver más
                </VerMas>
                <Modal view={modalState} changeView={setModalState}>
                  <Carousel> </Carousel>
                </Modal>
              </Image>
            </Galery>

            <BlockDescription>
              <h2>Descripción del producto</h2>

              <Text>{product.description}</Text>
            </BlockDescription>
            <BlockCaracteristics>
              <h2>Caracterísitcas del producto</h2>
              <div style={{display: 'flex', justifyContent: 'space-between', width:"90%", paddingTop: "15px"}}>
                <FaCar style={{ color:"#FCA311", fontSize: "50px" }}/>
                <FaDesktop style={{ color:"#FCA311", fontSize: "50px" }}/>
                <FaWifi style={{ color:"#FCA311", fontSize: "50px" }}/>
                <GiCarDoor style={{ color:"#FCA311", fontSize: "50px" }}/>
                <GiGps style={{ color:"#FCA311", fontSize: "50px" }}/>
              </div>
            </BlockCaracteristics>
            <BlockPolicies>
              <h2>Políticas</h2>
              <Text>
                <ul>
                  <li>
                    Las multas o cantidades asimiladas por infracciones de
                    tráfico o infracciones de leyes durante el período de
                    alquiler son responsabilidad de los conductores del
                    vehículo.
                  </li>
                  <li>
                    Conservar el vehículo en buen estado y no exponerlo
                    potenciales riesgos.
                  </li>
                  <li>
                    No realizar actividades con fines de subarriendo del
                    vehículo, ni transportar personas o mercancías que infrinjan
                    la Ley.
                  </li>
                  <li>
                    No participar en competiciones o carreras deportivas,
                    oficiales o no.
                  </li>
                  <li>
                    No conducir bajo la influencia de bebidas alcohólicas,
                    drogas, otras sustancia.
                  </li>
                  <li>
                    Cerrar correctamente el vehículo, estacionar en lugar apto,
                    adecuado y seguro cuando no está siendo utilizado, así como
                    conservar y mantener la documentación de este dentro.
                  </li>
                </ul>
              </Text>
            </BlockPolicies>
            <Reserva id={id} />
            <Footer />
          </Container>
        ))}
    </div>
  );
};

export default ProductDetails;
