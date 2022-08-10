import React from 'react'; 
import {Form, Button, Inputs, CenteredText, LastParagraph, InputsContainer } from './Register.styles';

export default function Register (){

    return(

        <Form >

            <h1> Registro </h1>
            <CenteredText> Por favor, complete este formulario para crear una cuenta.</CenteredText>
            
            <InputsContainer>
            <h3> Nombre </h3>
            <Inputs 
            placeholder='Nombre'
            type="text"
            
            />

            <h3> Apellido </h3>
            <Inputs 
            placeholder='Apellido'
            type="text"
            
            />
            <h3> E-mail </h3>
            <Inputs
                placeholder='Correo electronico'
                type="email"
            />

            <h3> Contraseña </h3>
            <Inputs 
                
                placeholder='Contraseña'
                type="password"
            />


            <h3> Confirmar Contraseña </h3>
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


    );

}