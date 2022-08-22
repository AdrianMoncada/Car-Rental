import React from 'react';
import  Header  from '../../components/header';
import Banner from '../../components/component/banner/banner';
import  Footer  from '../../components/footer';


import AllCategories from '../../components/category/AllCategories';

import ProductsHome from '../Product/ProductsHome';

import { Container } from './home.styles'


const Home = () =>{
  
    return (
      <Container>
         <Header/>
         <Banner/>

         <AllCategories/>
          

          <ProductsHome/>

         <Footer/>
 
      </Container>
     )
}

export default Home