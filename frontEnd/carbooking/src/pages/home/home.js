import React, {useState} from "react";
import Header from "../../components/header";
import Banner from "../../components/banner/banner";
import Footer from "../../components/footer";

import AllCategories from "../../components/category/AllCategories";
import ProductsHome from "../Product/ProductsHome";
import Login from "../Login/Login";
import {ContainerAll} from "../home/home.styles";

// Estilos
import { Container } from "./home.styles";

const Home = () => {

  const [show, setShow] = useState(false);
  const [user, setUser] = useState({
    nombre: "Administrador",
    correo: "admin@carbooking.com",
    password: "123456",
    acceso: false,
  });
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [city, setCity] = useState("");
  const [category, setCategory] = useState("");

  return (
    <Container>
      <Header usuario={user} mostrarModal={handleShow} setUsuario={setUser} cerrarModal={handleClose}   />
      <AllCategories category= {category} setCategory={setCategory}/>
      <Banner setCity={setCity}/>
      <ContainerAll>
      <ProductsHome city={city}  />
      </ContainerAll>
      <Footer />
      <Login mostrar={show} cerrarModal={handleClose} usuario={user} cambiarUsuario={setUser} />
    </Container>
  );
};

export default Home;
