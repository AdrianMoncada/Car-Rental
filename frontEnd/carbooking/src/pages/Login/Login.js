import React from 'react'; 
import LoginScreens from '../../components/component/Forms/FormLogin/LoginScreen';
import Footer from '../../components/footer';
import Header from '../../components/header';
import { Headers, Footers} from './login.styles';

export default function Login (){

    return(
      <body>
        <Headers> 
          <Header/>
        </Headers>
        <LoginScreens />
        <Footers>
          <Footer />
        </Footers>
      </body>
    );

}