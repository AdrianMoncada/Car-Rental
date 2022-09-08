import {useState} from 'react';


const useInitialState = () => {
    

    
    // Logica Modal Register
    const [showModalRegister, setShowModalRegister] = useState(false);
    const handleCloseRegister = () => setShowModalRegister(false);
    const handleShowRegister = () => {
        setShowModalRegister(true);
        setShow(false);
    }
    const handleShowLogin = () => {
        setShow(true);
        setShowModalRegister(false); 
    }
    
    const cierraLoginAbreRegistro = () => {
        setShowModalRegister(true);
        setShow(false);
    }
    
    // Cierra logica modal register 
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
   
    const [user, setUser] = useState({
    name: "",
    lastName: "",
    acceso: false,
  });



  
  // const handleShow = () => setShow(true);

  const headersProps = {
    mostrarModalLogin: show,
    usuario:user, 
    mostrarModal:handleShowLogin,
    setUsuario:setUser,
    cerrarModal:handleClose,
    mostrarRegister: showModalRegister,
    mostrarModalRegister:handleShowRegister,
    cerrarModalRegister:handleCloseRegister,
    cierraLoginAbreRegistro: cierraLoginAbreRegistro }


        
  return {...headersProps}
}

export default useInitialState

