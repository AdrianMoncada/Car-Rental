import React from 'react';
import  Header  from '../../components/header';
import Banner from '../../components/component/banner/banner';
import  Footer  from '../../components/footer';
import List  from   '../../components/List';
import AllCategories from '../../components/category/AllCategories';
import { Container } from './home.styles'


const Home = () =>{
  
    return (
      <Container>
         <Header/>
         <Banner/>
         <AllCategories/>
          
         <List/>
         <Footer/>
 
      </Container>
     )
}

export default Home