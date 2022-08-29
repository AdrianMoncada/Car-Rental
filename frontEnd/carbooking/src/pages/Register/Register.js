import React from 'react'; 
// import { Link} from "react-router-dom";
import {useFormik} from "formik"; 
import * as Yup from "yup"; 
import {Form} from "semantic-ui-react"; 

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
        ButtonLogin
    } from './Register.styles';

export default function Register (){


    const formik = useFormik({
        initialValues: { 
        name: "",
        lastName: "",
        email:"",
        password: "",
        repeatPassword: "", 
    }, 
    validationSchema: Yup.object({
        name: Yup.string().min(2, 'El nombre debe tener más de 3 digitos').max(50, 'Demasiado largo').required('El nombre es obligatorio'),
        lastName: Yup.string().min(2, 'El nombre debe tener más de 3 digitos').max(50, 'Demasiado largo').required("El apellido es obligatorio"),
        email: Yup.string().email("No es un correo valido").required("El correo es obligatorio"),
        password: Yup.string().min(4, "Debe contener 4 digitos o más").max(50).required("La contraseña es obligatoria").oneOf([Yup.ref("repeatPassword")], "Las contraseña no con iguales"),
        repeatPassword: Yup.string().min(4, "Debe contener  4 digitos o más").max(50).required("La confirmación es obligatoria").oneOf([Yup.ref("password")], "Las contraseña no con iguales"),
    }),
    onSubmit: (formData) => {
        console.log(formData);
    }
    })

    return(
        <Body>
            <PrincipalForm onSubmit={formik.handleSubmit}>
            <OneDiv>
                <Title> Registro </Title>

                <CenteredText> Por favor, complete este formulario para crear una cuenta.</CenteredText>
            </OneDiv>

            <TwoDiv>
                    <Form style={{
                        width: "70%", 
                        textAlign: "center",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        color: "red"
                        }}>
                    <H6> Nombre </H6>
                    <Form.Input
                    name="name"
                    placeholder='Nombre'
                    type="text"
                    onChange={formik.handleChange}
                    error={formik.errors.name}
                    />

                    <H6> Apellido </H6>
                    <Form.Input  
                    name= 'lastName'
                    placeholder='Apellido'
                    type="text"
                    onChange={formik.handleChange}
                    error={formik.errors.lastName}
                    />
                    <H6> E-mail </H6>
                    <Form.Input 
                        name='email'
                        placeholder='Correo electronico'
                        type="text"
                        onChange={formik.handleChange}
                        error={formik.errors.email}
                    />

                    <H6> Contraseña </H6>
                    <Form.Input 
                        name='password'
                        placeholder='Contraseña'
                        type="password"
                        onChange={formik.handleChange}
                        error={formik.errors.password}
                    />


                    <H6> Confirmar Contraseña </H6>
                    <Form.Input 
                        name='repeatPassword'
                        placeholder='Confirmar Contraseña'
                        type="password"
                        onChange={formik.handleChange}
                        error={formik.errors.repeatPassword}
                    />
                    </Form>   
            </TwoDiv>
            
            <ThreeDiv>
                <Button type="submit"> Registrarse </Button>
            </ThreeDiv>
            
            
            <TextLink>
                <p> ¿Ya tienes una cuenta?</p>
                <ButtonLogin>
                    Entra aquí
                </ButtonLogin>
                {/*<p> <Link to="/signin" style={{textDecoration: "none", color:"#FCA311"}}> ㅤEntra aquí </Link> </p>*/}
            </TextLink>
           
           
            <LastParagraph>Al hacer clic en el botón Registrar, acepta nuestros Términos y Condiciones</LastParagraph>
        </PrincipalForm>

        </Body>

        

    );

}