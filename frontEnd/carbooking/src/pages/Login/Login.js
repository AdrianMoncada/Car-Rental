import React from 'react'; 
import LoginScreens from '../../components/component/Forms/FormLogin/LoginScreen';
import Footer from '../../components/footer';
import Header from '../../components/header';

export default function Login (){

    return(
      <body>
        <header> 
          <Header/>
        </header>
        <LoginScreens />
        <footer>
          <Footer />
        </footer>
      </body>
    );

}