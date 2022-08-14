import React, { useState } from "react";
import {
  Button,
  ErrorMessage,
  Form,
  Inputs,
  LastParagraph,
} from "../../../../pages/Login/login.styles";

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
    <Form action="" onSubmit={onSubmit}>
      <h1> Iniciar Sesión </h1>

      {!primerCarga && !formularioValido && (
        <ErrorMessage>
          Por favor vuelva a intentarlo, sus credenciales son inválidas
        </ErrorMessage>
      )}

      <h3> E-mail </h3>
      <Inputs
        type="email"
        placeholder="Correo Electrónico"
        name="email"
        value={correo}
        onChange={(e) => cambiarCorreo(e.target.value)}
      />

      <h3> Contraseña </h3>
      <Inputs
        type="password"
        placeholder="Contraseña"
        name="password"
        value={password}
        onChange={(e) => cambiarPassword(e.target.value)}
      />

      <br></br>

      <Button type="submit"> Iniciar sesión </Button>

      <p> ¿No te has registrado?  Entra aquí </p>

      <LastParagraph>
        Al hacer clic en el botón Iniciar Sesión, acepta nuestros Términos y
        Condiciones
      </LastParagraph>
    </Form>
  );
}

export default LoginScreens;
