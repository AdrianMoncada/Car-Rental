import React from "react";
// {/*Se hace la importación de Button y  Modal de Bootstrap*/}
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Register from "./Register";

const ModalRegister = ({showModalRegister, handleCloseModalRegister}) => {


  return (
    <Modal show={showModalRegister} onHide={handleCloseModalRegister}>
      <Modal.Header closeButton>
        <Modal.Title>Registro</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/*Componente REGISTRO */}
        <Register/>    
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
