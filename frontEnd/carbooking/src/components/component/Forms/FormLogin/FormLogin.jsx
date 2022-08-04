
const FormLogin = () => {
  const { user, loginLogoutEvent } = useContext(UserProvider);
  const [email, cambiarCorreo] = useState({ campo: "", valido: null });
  const [password, cambiarPassword] = useState({ campo: "", valido: null });
  const [formularioValido, cambiarFormularioValido] = useState(null);

  const navigate = useNavigate();

  const expresiones = {
    password: /^.{6,15}$/, // 6 a 15 digitos.
    email: /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/, //coreo electrónico válido
  };

  useEffect(()=>{
    cambiarFormularioValido(true)
  },[email.campo,password.campo])


  const onSubmit = async (e) => {
    e.preventDefault();

    if(email.valido && password.valido){
        const respuestaPost = await loginApi({
          username: email.campo,
          password: password.campo,
        });
        if (respuestaPost) {
          loginLogoutEvent({
            nombre: respuestaPost.nombre,
            apellido: respuestaPost.apellido,
            mail: respuestaPost.emailUsuario,
            id: respuestaPost.id&&respuestaPost.id,
            auth: true,
            redirect: false,
            rol: respuestaPost.rol,
            ciudad: respuestaPost.ciudad ? respuestaPost.ciudad : ""});
            
          navigate("/")}else{
          
            cambiarFormularioValido(false)
      }
      
        }
    console.log("formvalid: ",formularioValido)
  };

  return (
    <div className="contenedor">
      <div className="contenido">
        <Formulario action="" onSubmit={onSubmit}>
          {user.redirect && (
            <div className="contenedorErrorAlquiler">
              <p className="mensajeErrorAlquiler">
                <span className="iconoErrorAlquiler">!</span>
                Para Alquilar un vehiculo debe loguearse
              </p>
            </div>
          )}
          <h1 className="titulo">Iniciar sesión</h1>
          <ComponenteInput
            estado={email}
            cambiarEstado={cambiarCorreo}
            tipo="email"
            label="Correo Electrónico"
            placeholder="Correo electrónico"
            name="email"
            parrafoError="Correo inválido"
            expresionRegular={expresiones.email}
          />
          <ComponenteInput
            estado={password}
            cambiarEstado={cambiarPassword}
            tipo="password"
            label="Contraseña"
            placeholder="Escriba su contraseña"
            name="password1"
            parrafoError="La contraseña debe tener minimo 6 caracteres"
            expresionRegular={expresiones.password}
          />
          { formularioValido === false && (
            <MensajeError>
              <p>
                <FontAwesomeIcon icon={faExclamationTriangle} />
                Por favor vuelva a intentarlo, sus credenciales son inválidas 
              </p>
            </MensajeError>
          )}
          <ContenedorBotonCentrado className="contenedorBotonCentrado">
            <Boton type="submit">Ingresar</Boton>
            <p>
              ¿Aún no tenes cuenta?{" "}
              <Link to="/account" className="link">
                <span>Registrate</span>
              </Link>
            </p>
          </ContenedorBotonCentrado>
        </Formulario>
      </div>
    </div>
  );
};

export default FormLogin;
