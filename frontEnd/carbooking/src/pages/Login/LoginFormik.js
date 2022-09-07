import React from 'react'
import {useFormik} from "formik"; 
import * as Yup from "yup"; 
import Swal from "sweetalert2"
import { useNavigate} from 'react-router-dom';
import {Button, Form, Inputs,LastParagraph,Title,OneDiv,
    TwoDiv,ThreeDiv,H6,InputsContainer,TextLink,ContainerForm,ButtonRegister} from "./login.styles";
import ModalRegister from '../Register/ModalRegister';



const LoginFormik = ({setUsuario, mostrarRegister, cerrarModalRegister, cierraLoginAbreRegistro, cerrarModal}) => {
    const navigate = useNavigate();

    const formik = useFormik({

        initialValues:{
            email: "",
            password: "", 
        },

        validationSchema: Yup.object({
            email: Yup.string().email("No es un correo valido").required("El correo es obligatorio"),
            password: Yup.string().min(4, "Debe contener 4 digitos o más").max(50).required("La contraseña es obligatoria"),     
        }),

        onSubmit: (valores) => {
            formik.resetForm();
           // console.log("Valores: ",valores);
          console.log("Valor de email en LOGIN: ", valores.email)
          //setUsuario({name: valores.firstName, lastName: valores.lastName, acceso: true  });
          //   console.log("Valores Login: ", setUsuario);
            cerrarModal();

            const settingsGET = {
              method: "GET",
              headers: {
                  "email": "valores.email"
              }}
          
          
            fetch("http://18.219.33.103:8080/users/getByEmail", settingsGET)
            .then((response) => {
              console.log("RESPUESTA GET", response)})           
            .then(function(data) {
              // declaro una variable por fuera y aquí le paso como valor el data
             console.log(data);})
          .catch(function(error) {
             console.error("RESPUESTA GET", error);
          });


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
                        title: 'Inicio exitoso',
                        text:'Inició tu sesión',
                        icon:'success'
                    })
                   // console.log("respuesta: ", response)
                    return response.json();
                }else if(response.status === 401)
                    Swal.fire({
                        title: 'Algo salio mal',
                        text:'“No estas registrado o no son credenciales validas”',
                        icon:'error'
                    })           
          })
          .then(function(data) {
               console.log("LOGIN DATA", data);
                localStorage.setItem('jwt', JSON.stringify(data.token));
             navigate("/", {state: {fromLogin: true}})
          })
          .catch(function(error) {
               //console.error(error);
          });
        }

    }
    
    );
    

    return (
        <ContainerForm>
          <Form action="" onSubmit={formik.handleSubmit} autocomplete="off" >
    
            <OneDiv>
              <Title> Iniciar Sesión </Title>
    

            </OneDiv>
    
            <TwoDiv>
              <InputsContainer>
                <H6> E-mail </H6>
                <Inputs
                  type="email"
                  placeholder="Correo Electrónico"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email && <span style={{ color: "red" }}>{formik.errors.email}</span>}
    
                <H6> Contraseña </H6>
                <Inputs
                  type="password"
                  placeholder="Contraseña"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.password && formik.errors.password && <span style={{ color: "red" }}>{formik.errors.password}</span>}
              </InputsContainer>
            </TwoDiv>
    
            <ThreeDiv>
              <Button type="submit"> Iniciar sesión </Button>
            </ThreeDiv>
    
            <TextLink>
              <p> ¿No te has registrado?</p>
              <ButtonRegister onClick={() => cierraLoginAbreRegistro()}>
                Entra aquí
              </ButtonRegister>
              <ModalRegister cierraLoginAbreRegistro={cierraLoginAbreRegistro} mostrarRegister={mostrarRegister} cerrarModalRegister={cerrarModalRegister}></ModalRegister>
    
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