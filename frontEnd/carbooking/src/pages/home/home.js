import React from 'react';
import  Header  from '../../components/header';
import Banner from '../../components/component/banner/banner';
import  Footer  from '../../components/footer';
<<<<<<< HEAD
import List  from   '../../components/List';
import AllCategories from '../../components/category/AllCategories';
=======
import ProductsHome from '../Product/ProductsHome';
import CardCategories from '../../components/category/listCategories';
>>>>>>> dev-Dayana-galeriaDeProducto
import { Container } from './home.styles'


const Home = () =>{
  
    return (
      <Container>
         <Header/>
         <Banner/>
<<<<<<< HEAD
         <AllCategories/>
          
         <List/>
=======
         <CardCategories/>
          <ProductsHome/>
>>>>>>> dev-Dayana-galeriaDeProducto
         <Footer/>
 
      </Container>
     )
}

export default Home