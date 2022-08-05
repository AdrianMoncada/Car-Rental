import React from 'react';
import  Header  from '../../components/header';
import  Footer  from '../../components/footer';
import List  from   '../../components/List';
import CardCategories from '../../components/category/listCategories';
import { Container } from './home.styles'


const Home = () =>{
    return (
     <Container>
        <Header/>
        <CardCategories/>

        <List/>
        <Footer/>

     </Container>
    )
}

export default Home