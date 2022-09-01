import React, { useState } from 'react'
//import { Formik } from 'formik';
import {useFormik} from "formik"; 
import * as Yup from "yup"; 
import axios from 'axios';

import SuccessMessageModal from '../../components/SuccessMessageModal/SuccessMessageModal';
import Login from '../Login/Login';


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
    //MessageError
} from './Register.styles';


const RegisterFormik = () => {


    async function postData(valores) {
        try{
            const response = await axios({
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                url: 'http://18.219.33.103:8080/users',
                data: JSON.stringify(valores)
                });
                return response
                } catch(e){
                    console.log(e);
                }
                        

    }

 
    const formik = useFormik({

        initialValues:{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            // repeatPassword: "",
            city: "",
    
        },

        validationSchema: Yup.object({
            firstName: Yup.string().min(2, 'El nombre debe tener más de 3 caracteres ').max(50, 'Demasiado largo').required('El nombre es obligatorio'),
            lastName: Yup.string().min(2, 'El nombre debe tener más de 3 caracteres ').max(50, 'Demasiado largo').required("El apellido es obligatorio"),
            email: Yup.string().email("No es un correo valido").required("El correo es obligatorio"),
            password: Yup.string().min(4, "Debe contener 4 digitos o más").max(50).required("La contraseña es obligatoria")//.oneOf([Yup.ref("repeatPassword")], "Las contraseñas no coinciden"),
            // repeatPassword: Yup.string().min(4, "Debe contener  4 digitos o más").max(50).required("La confirmación es obligatoria").oneOf([Yup.ref("password")], "Las contraseñas no coinciden"),
        }),

        onSubmit: (valores, {resetForm}) => {
            formik.resetForm();
            console.log(valores);
            postData(valores);


            const settings = {
                method: "POST",
                body: JSON.stringify(valores),
                headers: {
                    "content-type": "application/json",
                    "Accept": "application/json"
                }
            }
        
            fetch("http://18.219.33.103:8080/users", settings)
           .then(function(response) {
                return response.json();
           })
           .then(function(data) {
                console.log(data);
           })
           .catch(function(error) {
                console.error(error);
           });
            cambiarFormularioEnviada(true);
            setTimeout(()=> cambiarFormularioEnviada(false), 2500);
        }

    }
    
    );

    

    const [formularioEnviado, cambiarFormularioEnviada] = useState(false);

    // Lógica Modal MessageSuccess
    const [showModalMessageSuccess, setShowModalMessageSuccess] = useState(false);
    const handleShowMessageSuccess = () => setShowModalMessageSuccess(true);
    // Cierra lógica modal MessageSuccess

    // Lógica para activar el modal de iniciar sesión
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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
{/* 
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
                    </InputsContainer> */}


                    <InputsContainer>
                        <H6> Ciudad </H6>
                        <label htlmFor="city"></label>
                        <Input type="text"
                        id= "city"
                        name="city"
                        placeholder='Ciudad'
                        value={formik.values.city}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        />
                        {formik.touched.city}
                    </InputsContainer>
            </TwoDiv>
                    
                    

            <ThreeDiv>
                <Button type="submit" onClick={() => {handleShowMessageSuccess()}}> Registrarse </Button>
            </ThreeDiv>

            {/*Al botón de envíar registro le inserto el componente 
            SuccessMessageModal(Modal de "Mensaje de éxtio") */}
            {formularioEnviado && <SuccessMessageModal 
            showModalMessageSuccess={showModalMessageSuccess}>
            </SuccessMessageModal>}
            

            <TextLink>
                <p> ¿Ya tienes una cuenta?</p>
                <ButtonLogin onClick={() => handleShow()}>
                    Entra aquí
                </ButtonLogin >
                <Login mostrar={show} cerrarModal={handleClose}/>
            </TextLink>
            <LastParagraph>Al hacer clic en el botón Registrar, acepta nuestros Términos y Condiciones</LastParagraph>

                </PrincipalForm>
            </Body>
		</>
	);
}

export default RegisterFormik