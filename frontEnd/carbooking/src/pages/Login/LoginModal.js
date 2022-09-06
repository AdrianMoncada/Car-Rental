import React from 'react'; 
//import LoginScreens from './LoginScreen';
import Modal from 'react-bootstrap/Modal';
import LoginFormik from './LoginFormik';

export default function Login ({mostrar, cerrarModal, usuario, cambiarUsuario, mostrarRegister, cierraLoginAbreRegistro}){

  return(
    <Modal show={mostrar} onHide={cerrarModal}>
      <Modal.Header closeButton>
        <Modal.Title>  </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <LoginFormik mostrarRegister={mostrarRegister} cerrarModal={cerrarModal} cierraLoginAbreRegistro={cierraLoginAbreRegistro}> </LoginFormik>
        {/* <LoginScreens usuario={usuario} cambiarUsuario={cambiarUsuario} cerrarModal={cerrarModal}  /> */}
      </Modal.Body>
    </Modal>
  );
}