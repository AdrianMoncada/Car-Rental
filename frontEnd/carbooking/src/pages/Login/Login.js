import React from 'react'; 
import Footer from '../../components/footer';
import Header from '../../components/header';
import {Form, Button, Inputs, UltimoParrafo} from './Login.Styles'

export default function Login (){

    return(

        <body>

          <header> 
            <Header/>
          </header>
        <Form >
  

            <h1> Iniciar Sesión </h1>
            <h3> E-mail </h3>
            <Inputs
                
                type="email"
            />

            <h3> Contraseña </h3>
            <Inputs 
                
                type="password"
            />

            <br></br>
            <Button type="submit"> Iniciar sesión </Button>

            <p> ¿No te has registrado? Entra aquí </p>
            <UltimoParrafo>Al hacer clic en el botón Iniciar Sesión, acepta nuestros Términos y Condiciones</UltimoParrafo>
        
           
    
        
        </Form>
        <footer>
          <Footer />
        </footer>
        </body>

    );

}