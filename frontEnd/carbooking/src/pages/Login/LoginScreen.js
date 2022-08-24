import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  ErrorMessage,
  Form,
  Inputs,
  LastParagraph,
  Title,
  OneDiv,
  TwoDiv,
  ThreeDiv,
  H6,
  InputsContainer,
  TextLink,
  ContainerForm,
} from "./login.styles";

function LoginScreens({ usuario, cambiarUsuario, cerrarModal }) {
  const [correo, cambiarCorreo] = useState("");
  const [password, cambiarPassword] = useState("");
  const [primerCarga, cambiarPrimerCarga] = useState(true);
  const [formularioValido, cambiarFormularioValido] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    cambiarPrimerCarga(false);

    let formValido = true;
    const emailRegex =
      /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (!emailRegex.test(correo)) {
      console.log("Email no valido");
      formValido = false;
    } else if (password.length < 6) {
      console.log("Password menos 6 caracteres");
      formValido = false;
    } else if (correo !== usuario.correo || password !== usuario.password) {
      console.log("Datos no coinciden");
      formValido = false;
    }

    if (formValido) {
      cambiarUsuario((dataUser) => ({
        ...dataUser,
        acceso: true,
      }));
      cerrarModal();
    }

    cambiarFormularioValido(formValido);
  };

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
      <p> <Link to="/signup" style={{textDecoration: "none", color:"#FCA311"}}>ㅤ Entra aquí </Link> </p>

      </TextLink>
      <LastParagraph>
        Al hacer clic en el botón Iniciar Sesión, acepta nuestros Términos y
        Condiciones
      </LastParagraph>
    </Form>
    </ContainerForm>
  );
}

export default LoginScreens;
