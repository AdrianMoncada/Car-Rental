import React, { useState } from 'react';
import  Header  from '../../components/header';
import  Footer  from '../../components/footer';
import List  from   '../../components/List';
import CardCategories from '../../components/category/listCategories';
import { Container } from './home.styles'
import BannerSearch from '../../components/component/banner/banner';
import Login from '../Login/Login';
//import SelectCiudades from '../../components/component/banner/selectciudades';
//import calendariobanner from '../../components/component/calendarioBanner/calendariobanner';


const Home = () =>{
    const [show, setShow] = useState(false);
    const [user, setUser] = useState({
        nombre: "Administrador",
        correo: "admin@carbooking.com",
        password: "123456",
        acceso: false,
      });
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
     <Container>
        <Header usuario={user} mostrarModal={handleShow}/>
        <BannerSearch />
        <CardCategories/>
        <List/>
        <Footer/>
        <Login mostrar={show} cerrarModal={handleClose} usuario={user} cambiarUsuario={setUser} />
     </Container>
    )
}

export default Home