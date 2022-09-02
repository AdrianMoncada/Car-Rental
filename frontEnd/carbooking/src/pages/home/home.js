import React, {useState, useEffect} from "react";
import {useLocation, useNavigate} from 'react-router-dom';
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

  const location = useLocation();
  const navigate = useNavigate();

  const [show, setShow] = useState(false);

    // Logica Modal Register
    const [showModalRegister, setShowModalRegister] = useState(false);
    const handleCloseRegister = () => setShowModalRegister(false);
    const handleShowRegister = () => {
      setShowModalRegister(true);
      setShow(false);
    }
    const handleShowLogin = () => {
      setShow(true);
      setShowModalRegister(false); 
    }
    // Cierra logica modal register 


  const [user, setUser] = useState({
    nombre: "Administrador",
    correo: "admin@carbooking.com",
    password: "123456",
    acceso: false,
  });

  console.log(location.key);

  useEffect(()=>{
    if (location.state?.fromRegister || location.state?.fromRegister != null) {
      setShow(true);
      navigate("/", {state: null})
    }
  }, [location] )

  console.log(location.state?.fromRegister);

  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const [city, setCity] = useState("");
  const [category, setCategory] = useState("");
  const headersProps = {
    usuario:user, 
    mostrarModal:handleShowLogin,
    setUsuario:setUser,
    cerrarModal:handleClose,
    mostrarRegister: showModalRegister,
    mostrarModalRegister:handleShowRegister,
    cerrarModalRegister:handleCloseRegister }
  return (
    <Container>
      <Header {...headersProps}/>
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
