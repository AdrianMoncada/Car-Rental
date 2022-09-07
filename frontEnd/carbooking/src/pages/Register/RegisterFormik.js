import React, { useState } from 'react'
import {useFormik} from "formik"; 
import * as Yup from "yup"; 
//import sweet alert for message of success or error
import Swal from "sweetalert2"
import { useNavigate} from 'react-router-dom';
import LoginModal from '../Login/LoginModal';

import {PrincipalForm, 
    Button,
    CenteredText,
    LastParagraph,
    TextLink,
    Body,
    OneDiv,
    TwoDiv,
    ThreeDiv,
    Title,
    H6,
    ButtonLogin,
    InputsContainer, 
    Input,
} from './Register.styles';


const RegisterFormik = ({toggleModal, cerrarModalRegister, setUsuario}) => {

    const navigate = useNavigate();

    const formik = useFormik({

        initialValues:{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            repeatPassword: "", 
        },

        validationSchema: Yup.object({
            firstName: Yup.string().min(2, 'El nombre debe tener más de 3 caracteres ').max(50, 'Demasiado largo').required('El nombre es obligatorio'),
            lastName: Yup.string().min(2, 'El nombre debe tener más de 3 caracteres ').max(50, 'Demasiado largo').required("El apellido es obligatorio"),
            email: Yup.string().email("No es un correo valido").required("El correo es obligatorio"),
            password: Yup.string().min(4, "Debe contener 4 digitos o más").max(50).required("La contraseña es obligatoria").oneOf([Yup.ref("repeatPassword")], "Las contraseñas no coinciden"),
            repeatPassword: Yup.string().min(4, "Debe contener  4 digitos o más").max(50).required("La confirmación es obligatoria").oneOf([Yup.ref("password")], "Las contraseñas no coinciden"),
        }),

        onSubmit: (valores) => {
           // formik.resetForm();
            cerrarModalRegister();
           // console.log("Valores: ",valores);
           setUsuario({name: valores.firstName, lastName: valores.lastName, acceso: true  });


            const settings = {
                method: "POST",
                body: JSON.stringify(valores),
                headers: {
                    "Content-type": "application/json",
                    "Accept": "application/json",
                }
            }

            const settingsGet = {
                 method: "GET",
                 headers: {
                 'Authorization': `Bearer ${localStorage.getItem("data.token")}`,
                  "Content-type": "application/json",
                  "Accept": "application/json",
              }
          }
        
            fetch("http://18.219.33.103:8080/users", settings)
           .then((response) => {
                if(response.ok){
                    Swal.fire({
                        title: 'Resgistrado con éxito',
                        text:'Bienvendio',
                        icon:'success'
                    })
                    console.log("respuesta: ", response)
                    return response.json();

                    //this  code send a screen alert   if confirm the alert your'e redirect to reservas for example
                }else if(response.ok !== true)
                    Swal.fire({
                        title: 'Algo salio mal',
                        text:'“Lamentablemente no ha podido registrarse. Por favor intente más tarde”',
                        icon:'error'
                    })
                
                
           })
           .then(function(data) {
                console.log(data);
                localStorage.setItem('jwt', JSON.stringify(data.token));
             navigate("/", {state: {fromRegister: true}})
           })
           .catch(function(error) {
                console.error(error);
           });

        

           fetch("http://18.219.33.103:8080/users/tokenFilter" , settingsGet)
           .then((response) => {
              if(response.ok){
                  Swal.fire({
                      title: 'Token valido',
                      text:'Bienvendio',
                      icon:'success', 
                      timer: 10000
                  })
                  console.log("respuesta token: ", response)
                  return response.json();

        //this  code send a screen alert   if confirm the alert your'e redirect to reservas for example
              }else if(response.ok !== true)
                  Swal.fire({
                      title: 'Token no valido',
                      text:'“Lamentablemente no ha podido registrarse. Por favor intente más tarde”',
                      icon:'error'
                  })
                  console.log("respuesta token: ", response)
         })
         .then(function(data) {
              //console.log(data);
          localStorage.setItem('jwt', JSON.stringify(data.token));
           navigate("/", {state: {fromRegister: true}})
         })


        }, 

    }
    
    );


    // Lógica para activar el modal de iniciar sesión
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    // Cierra lógica para activar el modal de iniciar sesión




	return (
		<>

            <Body>
                <PrincipalForm onSubmit={formik.handleSubmit}>
                    
                <OneDiv>
                <Title> Registro </Title>
                    
                <CenteredText> Por favor, complete este formulario para crear una cuenta.</CenteredText>
            </OneDiv>

            <TwoDiv>
                    <InputsContainer>
                        <H6> Nombre </H6>
                        <label htlmFor="firstName"></label>
                        <Input type="text"
                         id= "firstName"
                         name="firstName"
                         placeholder='Nombre'
                         value={formik.values.firstName}
                         onChange={formik.handleChange}
                         onBlur={formik.handleBlur}
                         />
                    {formik.touched.firstName && formik.errors.firstName && <span style={{ color: "red" }}>{formik.errors.firstName}</span>}
                    
                    </InputsContainer>

                    <InputsContainer>
                        <H6> Apellido </H6>
                        <label htlmFor="lastName"> </label>
                        <Input type="text"
                        id= "lastName"
                        name="lastName"
                        placeholder='Apellido'
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        />
                        {formik.touched.lastName && formik.errors.lastName && <span style={{ color: "red" }}>{formik.errors.lastName}</span>}
                    </InputsContainer>

                    <InputsContainer>
                        <H6> E-mail </H6>
                        <label htlmFor="email"></label>
                        <Input type="email"
                        id= "email"
                        name="email"
                        placeholder='Email'
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        />
                        {formik.touched.email && formik.errors.email && <span style={{ color: "red" }}>{formik.errors.email}</span>}
                    </InputsContainer>

                    <InputsContainer>
                        <H6> Contraseña </H6>
                        <label htlmFor="password"></label>
                        <Input type="password"
                        id= "password"
                        name="password"
                        placeholder='Contraseña'
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        />
                        {formik.touched.password && formik.errors.password && <span style={{ color: "red" }}>{formik.errors.password}</span>}
                    </InputsContainer>

                    <InputsContainer>
                        <H6> Confirmar Contraseña </H6>
                        <label htlmFor="password"></label>
                        <Input type="password"
                        id= "repeatPassword"
                        name="repeatPassword"
                        placeholder='Confirmar Contraseña'
                        value={formik.values.repeatPassword}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        />
                        {formik.touched.repeatPassword &&formik.errors.repeatPassword && <span style={{ color: "red" }}>{formik.errors.repeatPassword}</span>}
                    </InputsContainer> 
            </TwoDiv>  

            <ThreeDiv>
                <Button type="submit"> Registrarse </Button>
            </ThreeDiv>


            <TextLink>
                <p> ¿Ya tienes una cuenta?</p>
                <ButtonLogin onClick={() => toggleModal()}>
                    Entra aquí
                </ButtonLogin >
                <LoginModal mostrar={show} cerrarModal={handleClose}/>
            </TextLink>
            <LastParagraph>Al hacer clic en el botón Registrar, acepta nuestros Términos y Condiciones</LastParagraph>

                </PrincipalForm>
            </Body>
		</>
	);
}

export default RegisterFormik