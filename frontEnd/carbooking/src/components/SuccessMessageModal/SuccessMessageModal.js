import React from 'react'
import Modal from "react-bootstrap/Modal";
import {ContainerMessage, MessageError } from "../SuccessMessageModal/SuccessMessage.Style"


const SuccessMessageModal = (showModalMessageSuccess, handleCloseModalMessageSuccess) => {

    return (
        <Modal  show={showModalMessageSuccess} onHide={handleCloseModalMessageSuccess}
        >
          <Modal.Header>
            <Modal.Title ></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ContainerMessage>
                <MessageError>¡Formulario enviado con exito! </MessageError>    
            </ContainerMessage> 
            </Modal.Body>
          <Modal.Footer  style={{}}>
          </Modal.Footer>
        </Modal>
      );

}

export default SuccessMessageModal