import React, {useState, useEffect} from "react";
import {useLocation, useNavigate} from 'react-router-dom';
import Header from "../../components/header";
import Banner from "../../components/banner/banner";
import Footer from "../../components/footer";

import AllCategories from "../../components/category/AllCategories";
import ProductsHome from "../Product/ProductsHome";
import LoginModal from  "../Login/LoginModal";
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


    const cierraLoginAbreRegistro = () => {
      setShowModalRegister(true);
      setShow(false);
    }

   const [user, setUser] = useState({
    name: "",
    lastName: "",
    acceso: false,
  });

  //console.log("Valores HOME: ", user)

  useEffect(()=>{
    if (location.state?.fromRegister || location.state?.fromRegister != null) {
      setShow(false);
      navigate("/", {state: null})
    }
  }, [location, navigate] )


  useEffect(() =>{
    if (location.state?.fromLogin || location.state?.fromLogin != null) {
      setShow(false);
      navigate("/", {state: null})
    }
  }, [location, navigate])

  //console.log(location.state?.fromRegister);

  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const [city, setCity] = useState("");
  const [initialDate, setInitialDate] = useState("");
  const [finalDate, setFinalDate] = useState("");
  const [category, setCategory] = useState("");
  
  const headersProps = {
    mostrarModalLogin: show,
    usuario:user, 
    mostrarModal:handleShowLogin,
    setUsuario:setUser,
    cerrarModal:handleClose,
    mostrarRegister: showModalRegister,
    mostrarModalRegister:handleShowRegister,
    cerrarModalRegister:handleCloseRegister,
    cierraLoginAbreRegistro: cierraLoginAbreRegistro }

  return (
    <Container>
      <Header {...headersProps}/>
      {/* <AllCategories category= {category} setCategory={setCategory}/> */}
      <AllCategories setCategory={setCategory}/>
      <Banner setCity={setCity} setInitialDate={setInitialDate} setFinalDate={setFinalDate}/>
      <ContainerAll>
      <ProductsHome city={city} category={category} initialDate={initialDate} finalDate={finalDate}/>
      </ContainerAll>
      <Footer />
      <LoginModal {...headersProps} mostrar={show} cerrarModal={handleClose}/>
    </Container>
  );
};

export default Home;
