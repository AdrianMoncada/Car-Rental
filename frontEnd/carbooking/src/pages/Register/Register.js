import React from 'react'; 
import Header from '../../components/header';
import Footer from '../../components/footer';
import {Form, Button, Inputs, CenteredText, LastParagraph, InputsContainer } from './Register.styles';
import { Headers, Footers } from '../Login/login.styles';

export default function Register (){

    return(


        <body>
            <Headers>
                <Header/>
            </Headers>
        <Form >

            <h1> Registro </h1>
            <CenteredText> Por favor, complete este formulario para crear una cuenta.</CenteredText>
            
            <InputsContainer>
            <h6> Nombre </h6>
            <Inputs 
            placeholder='Nombre'
            type="text"
            
            />

            <h6> Apellido </h6>
            <Inputs 
            placeholder='Apellido'
            type="text"
            
            />
            <h6> E-mail </h6>
            <Inputs
                placeholder='Correo electronico'
                type="email"
            />

            <h6> Contraseña </h6>
            <Inputs 
                
                placeholder='Contraseña'
                type="password"
            />


            <h6> Confirmar Contraseña </h6>
            <Inputs 
                
                placeholder='Confirmar Contraseña'
                type="password"
            />
            </InputsContainer>

            <br></br>
            <Button type="submit"> Iniciar sesión </Button>

            <CenteredText> ¿Ya tienes una cuenta? Entra aquí </CenteredText>
            <LastParagraph>Al hacer clic en el botón Iniciar Sesión, acepta nuestros Términos y Condiciones</LastParagraph>
        </Form>
            <Footers>
                <Footer/>               
            </Footers>
        </body>

    );

}