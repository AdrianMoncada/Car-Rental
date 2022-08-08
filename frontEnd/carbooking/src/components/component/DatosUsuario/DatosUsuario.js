import React from "react";

export default function DatosUsuario() {
  const { user, loginLogoutEvent } = useContext(UserProvider);
  const [nombre, cambiarNombre] = useState({
    campo: user.nombre,
    valido: null,
  });
  const [apellido, cambiarApellido] = useState({
    campo: user.apellido,
    valido: null,
  });
  const [email, cambiarCorreo] = useState({ campo: user.mail, valido: null });
  const [ciudad, cambiarCiudad] = useState({ campo: "", valido: null });

  useEffect(() => {
    loginLogoutEvent({
      ...user,
      ciudad: ciudad.campo,
    });
  }, [ciudad.campo]);

  const expresiones = {
    //se aceptan letras, espacios y hasta acentos
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
    //tipos de elementos/datos que se aceptan
    email: /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/, 
  };

  return (
    <>
      <h2>Completá tus datos</h2>
      <div className="tablaDatos">
        <div className="dosDatos">
          <div className="datoSolo">
            <ComponenteInput
              estado={nombre}
              cambiarEstado={cambiarNombre}
              tipo="text"
              label="Nombre"
              placeholder="Escriba su nombre"
              name="nombre"
              parrafoError="formato invalido."
              expresionRegular={expresiones.nombre}
              isDisabled={true}
            />
          </div>
          <div className="datoSolo">
            <ComponenteInput
              disabled={true}
              estado={apellido}
              cambiarEstado={cambiarApellido}
              tipo="text"
              label="Apellido"
              placeholder="Apellido"
              name="Apellido"
              parrafoError="formato invalido."
              expresionRegular={expresiones.nombre}
              isDisabled={true}
            />
          </div>
        </div>
        <div className="dosDatos">
          <div className="datoSolo">
            <ComponenteInput
              disabled={true}
              estado={email}
              cambiarEstado={cambiarCorreo}
              tipo="email"
              label="Correo Electrónico"
              placeholder="Correo electrónico"
              name="email"
              parrafoError="Correo inválido"
              expresionRegular={expresiones.email}
              isDisabled={true}
            />
          </div>
          <div className="datoSolo">
            <ComponenteInput
              required
              estado={ciudad}
              cambiarEstado={cambiarCiudad}
              tipo="text"
              label="Ciudad"
              placeholder="Ciudad"
              name="ciudad"
              parrafoError="formato invalido."
              expresionRegular={expresiones.nombre}
              isDisabled={false}
            />
          </div>
        </div>
      </div>
    </>
  );
}
