import React from "react";
// {/*Se hace la importación de Button y  Modal de Bootstrap*/}
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// import Register from "./Register";
import RegisterFormik from "./RegisterFormik";

const ModalRegister = ({showModalRegister, handleCloseModalRegister, toggleModal}) => {


  return (
    <Modal show={showModalRegister} onHide={handleCloseModalRegister}>
      <Modal.Header closeButton>
        <Modal.Title></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/*Componente REGISTRO */}
        <RegisterFormik toggleModal={toggleModal} cerrarModalRegister={handleCloseModalRegister}/>    
        </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModalRegister}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalRegister;
