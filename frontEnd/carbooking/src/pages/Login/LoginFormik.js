import React, { useState } from 'react'
import {useFormik} from "formik"; 
import * as Yup from "yup"; 
import Swal from "sweetalert2"
import { useNavigate} from 'react-router-dom';
import {Button, ErrorMessage,Form,Inputs,LastParagraph,Title,OneDiv,
    TwoDiv,ThreeDiv,H6,InputsContainer,TextLink,ContainerForm,ButtonRegister} from "./login.styles";



const LoginFormik = () => {
    const navigate = useNavigate();

    const formik = useFormik({

        initialValues:{
            email: "",
            password: "", 
        },

        validationSchema: Yup.object({
            email: Yup.string().email("No es un correo valido").required("El correo es obligatorio"),
            password: Yup.string().min(4, "Debe contener 4 digitos o más").max(50).required("La contraseña es obligatoria").oneOf([Yup.ref("repeatPassword")], "Las contraseñas no coinciden"),     
        }),

        onSubmit: (valores) => {
            formik.resetForm();
            cerrarModalRegister();
           // console.log("Valores: ",valores);

            const settings = {
                method: "POST",
                body: JSON.stringify(valores),
                headers: {
                 

                    "Content-type": "application/json",
                    "Accept": "application/json",
                }
            }
        
            fetch("http://18.219.33.103:8080/users/login", settings)
          .then((response) => {
                if(response.ok){
                    Swal.fire({
                        title: 'Resgistrado con éxito',
                        text:'Bienvendio',
                        icon:'success'
                    })
                    //console.log("respuesta: ", response)
                    return response.json();
                }else if(response.ok !== true)
                    Swal.fire({
                        title: 'Algo salio mal',
                        text:'“Lamentablemente no ha podido registrarse. Por favor intente más tarde”',
                        icon:'error'
                    })
                
               
          })
          .then(function(data) {
               //console.log(data);
                localStorage.setItem('jwt', JSON.stringify(data.token));
             navigate("/", {state: {fromRegister: true}})
          })
          .catch(function(error) {
               console.error(error);
          });
        }

    }
    
    );
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    

    return (
        <ContainerForm>
          <Form action="" onSubmit={onSubmit} autocomplete="off" >
    
            <OneDiv>
              <Title> Iniciar Sesión </Title>
    
              {!primerCarga && !formularioValido && (
                <ErrorMessage>
                  Por favor vuelva a intentarlo, sus credenciales son inválidas
                </ErrorMessage>
              )}
            </OneDiv>
    
            <TwoDiv>
              <InputsContainer>
                <H6> E-mail </H6>
                <Inputs
                  type="email"
                  placeholder="Correo Electrónico"
                  name="email"
                  value={correo}
                  onChange={(e) => cambiarCorreo(e.target.value)}
                />
    
                <H6> Contraseña </H6>
                <Inputs
                  type="password"
                  placeholder="Contraseña"
                  name="password"
                  value={password}
                  onChange={(e) => cambiarPassword(e.target.value)}
                />
              </InputsContainer>
            </TwoDiv>
    
            <ThreeDiv>
              <Button type="submit"> Iniciar sesión </Button>
            </ThreeDiv>
    
            <TextLink>
              <p> ¿No te has registrado?</p>
              <ButtonRegister>
                Entra aquí
              </ButtonRegister>
              
    
            </TextLink>
            <LastParagraph>
              Al hacer clic en el botón Iniciar Sesión, acepta nuestros Términos y
              Condiciones
            </LastParagraph>
          </Form>
        </ContainerForm>
      );
}

export default LoginFormik