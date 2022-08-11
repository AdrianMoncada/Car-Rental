import React from 'react'; 
import LoginScreens from '../../components/component/Forms/FormLogin/LoginScreen';
import Modal from 'react-bootstrap/Modal';

export default function Login ({mostrar, cerrarModal, usuario, cambiarUsuario}){

    return(
      <Modal show={mostrar} onHide={cerrarModal}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body><LoginScreens usuario={usuario} cambiarUsuario={cambiarUsuario} cerrarModal={cerrarModal} /></Modal.Body>
      </Modal>
    );

}