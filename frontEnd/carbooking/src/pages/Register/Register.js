import React from 'react'; 
import HeaderSecond from '../../components/hearderSecond';

import Footer from '../../components/footer';
import { Link} from "react-router-dom";

import {Form, 
        Button,
        Inputs,
        CenteredText,
        LastParagraph,
        InputsContainer,
        TextLink,
        Body,
        OneDiv,
        TwoDiv,
        ThreeDiv,
        Title,
        H6
    } from './Register.styles';
import { Headers, Footers } from '../Login/login.styles';

export default function Register (){

    return(


        <Body>
            <Headers>
                <HeaderSecond/>
            </Headers>
            <Form >
            <OneDiv>
                <Title> Registro </Title>

                <CenteredText> Por favor, complete este formulario para crear una cuenta.</CenteredText>
            </OneDiv>

            <TwoDiv>
                    <InputsContainer>
                    <H6> Nombre </H6>
                    <Inputs 
                    placeholder='Nombre'
                    type="text"
                    
                    />

                    <H6> Apellido </H6>
                    <Inputs 
                    label= 'Apellido'
                    name= 'Apellido'
                    placeholder='Apellido'
                    type="text"
                    
                    />
                    <H6> E-mail </H6>
                    <Inputs
                        placeholder='Correo electronico'
                        type="email"
                    />

                    <H6> Contraseña </H6>
                    <Inputs 
                        
                        placeholder='Contraseña'
                        type="password"
                    />


                    <H6> Confirmar Contraseña </H6>
                    <Inputs 
                        
                        placeholder='Confirmar Contraseña'
                        type="password"
                    />
                    </InputsContainer>    
            </TwoDiv>
            
            <ThreeDiv>
                <Button type="submit"> Registrarse </Button>
            </ThreeDiv>
            
            
            <TextLink>
                <p> ¿Ya tienes una cuenta?</p>
                <p> <Link to="/signin" style={{textDecoration: "none", color:"#FCA311"}}> ㅤEntra aquí </Link> </p>
            </TextLink>
           
           
            <LastParagraph>Al hacer clic en el botón Registrar, acepta nuestros Términos y Condiciones</LastParagraph>
        </Form>

            <Footers>
                <Footer/>               
            </Footers>

        </Body>

        

    );

}