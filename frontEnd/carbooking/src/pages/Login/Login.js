import React from 'react'; 
import LoginScreens from '../../components/component/Forms/FormLogin/LoginScreen';
import Footer from '../../components/footer';

import HeaderThree from '../../components/HeaderThree';

import { Headers, Footers, Body} from './login.styles';

export default function Login (){

    return(
      <Body>
        <Headers> 
          <HeaderThree/>
        </Headers>
        <LoginScreens />
        <Footers>
          <Footer />
        </Footers>
      </Body>
    );

}