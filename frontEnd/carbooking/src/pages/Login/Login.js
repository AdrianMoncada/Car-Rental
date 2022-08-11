import React from 'react'; 
import LoginScreens from '../../components/component/Forms/FormLogin/LoginScreen';
import Footer from '../../components/footer';

import HeaderSecond from '../../components/hearderSecond';
import { Headers, Footers} from './login.styles';

export default function Login (){

    return(
      <body>
        <Headers> 
          <HeaderSecond/>
        </Headers>
        <LoginScreens />
        <Footers>
          <Footer />
        </Footers>
      </body>
    );

}