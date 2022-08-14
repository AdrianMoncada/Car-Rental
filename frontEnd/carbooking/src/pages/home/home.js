import React from 'react';
import  Header  from '../../components/header';
import Banner from '../../components/component/banner/banner';
import  Footer  from '../../components/footer';
import List  from   '../../components/List';
import CardCategories from '../../components/category/listCategories';
import { Container } from './home.styles'


const Home = () =>{
  
    return (
      <Container>
         <Header/>
         <Banner/>
         <CardCategories/>
          
         <List/>
         <Footer/>
 
      </Container>
     )
}

export default Home