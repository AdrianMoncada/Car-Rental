import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginScreens() {
  const [correo, cambiarCorreo] = useState("");
  const [password, cambiarPassword] = useState("");
  const [primerCarga, cambiarPrimerCarga] = useState(true);
  const [formularioValido, cambiarFormularioValido] = useState(false);
  const navigate = useNavigate();

  const user = {
    nombre: "Administrador",
    correo: "admin@carbooking.com",
    password: "123456",
  };

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
    } else if (correo !== user.correo && password !== user.password) {
      console.log("Datos no coinciden");
      formValido = false;
    }

    if (formValido) {
      // Guardar el nombre -> user.nombre (Usar Context o Redux)
      navigate("/");
    }

    cambiarFormularioValido(formValido);
  };

  return (
    <div className="contenedor">
      <div className="contenido">
        <form action="" onSubmit={onSubmit}>
          <h1 className="titulo">Iniciar sesión</h1>
          {!primerCarga && !formularioValido && (
            <h3>
              Por favor vuelva a intentarlo, sus credenciales son inválidas
            </h3>
          )}
          <input
            type="text"
            placeholder="Correo Electrónico"
            name="email"
            value={correo}
            onChange={(e) => cambiarCorreo(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            name="password"
            value={password}
            onChange={(e) => cambiarPassword(e.target.value)}
          />
          <button>Iniciar</button>
        </form>
      </div>
    </div>
  );
}

export default LoginScreens;
