import React from 'react';

import { Container,Header,ButtonSign,Footer,ContainerBtn,Icon,ContainerIcon } from './home.styles'


const Home = () =>{
    return (
     <Container>
         <Header>
             <ContainerIcon>
             <Icon src="/logo1.png" alt='digitlB'/>
         <p>soy el eslogan</p>
             </ContainerIcon>
        
         <ContainerBtn>
         <ButtonSign>Crear cuenta</ButtonSign>
         <ButtonSign>Iniciar sesion</ButtonSign>
         </ContainerBtn>
         </Header>
         <Footer>
             <p>©2021 Digital Booking</p>
         </Footer>
         

     </Container>
    )
}

export default Home