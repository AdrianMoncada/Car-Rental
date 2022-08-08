import React from "react";
import LoginScreens from "../../components/component/Forms/FormLogin/LoginScreen";
import Footer from "../../components/footer";
import "./login.styles.js";

const Login = () => {
    return (
      <>
        <body>
          <LoginScreens />
        </body>
        <footer>
          <Footer />
        </footer>
      </>
    );
  };
  
  export default Login;