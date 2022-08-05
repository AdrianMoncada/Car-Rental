import React from 'react';
import  Header  from '../../components/header';
import  Footer  from '../../components/footer';
import List  from   '../../components/List';

import { Container } from './home.styles'


const Home = () =>{
    return (
     <Container>
        <Header/>
        <List/>
        <Footer/>

     </Container>
    )
}

export default Home