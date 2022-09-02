import React from 'react'; 
import LoginScreens from './LoginScreen';
import Modal from 'react-bootstrap/Modal';

export default function Login ({mostrar, cerrarModal, usuario, cambiarUsuario}){

  return(
    <Modal show={mostrar} onHide={cerrarModal}>
      <Modal.Header closeButton>
        <Modal.Title>  </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <LoginScreens usuario={usuario} cambiarUsuario={cambiarUsuario} cerrarModal={cerrarModal}  />
      </Modal.Body>
    </Modal>
  );

}