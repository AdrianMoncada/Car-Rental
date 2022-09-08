import React from 'react'
import {Overlay,
        ModalContainer,
        EncabezadoModal,
        Cerrar
} from './Modal.styles';

import { FaWindowClose } from 'react-icons/fa';


const Modal = ({children, view, changeView}) => {



  return (

    <>

    {view && 

    <Overlay>

        <ModalContainer style={{ "z-index": "1"}}>
            <EncabezadoModal>
                <Cerrar onClick={() => changeView(false)}> <FaWindowClose/> </Cerrar>
                {children}
            </EncabezadoModal>
        </ModalContainer>


    </Overlay>
    }
    </>
  )
}

export default Modal