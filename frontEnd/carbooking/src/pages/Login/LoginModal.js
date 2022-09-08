import React from 'react'; 
//import LoginScreens from './LoginScreen';
import Modal from 'react-bootstrap/Modal';
import LoginFormik from './LoginFormik';

export default function Login ({mostrar, cerrarModal, usuario, setUsuario, mostrarRegister, cierraLoginAbreRegistro}){

  return(
    <Modal show={mostrar} onHide={cerrarModal}>
      <Modal.Header closeButton>
        <Modal.Title>  </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <LoginFormik usuario={usuario} setUsuario={setUsuario} mostrarRegister={mostrarRegister} cerrarModal={cerrarModal} cierraLoginAbreRegistro={cierraLoginAbreRegistro}> </LoginFormik>
      </Modal.Body>
    </Modal>
  );
}