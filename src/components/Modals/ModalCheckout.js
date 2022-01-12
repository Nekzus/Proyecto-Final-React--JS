import { memo } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { BsCheck2Circle } from "react-icons/bs";

const ModalCheckout = ({ docRef, show, close }) => {

    return (
        <>
            <Modal className='modal' show={show} onHide={close} centered={true}>
                <div className='modal__content'>
                    <Modal.Header className='modal__header' closeButton>
                        <Modal.Title className='modal__title'>Gracias por tu compra</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='modal__body'>
                        <span className='modal__icon'>
                            <BsCheck2Circle />
                        </span>
                        <p className='modal__text'>Se genero la orden con ID# {docRef}</p>
                        <p className='modal__text'>En breve te contactaremos para confirmar tu compra</p>
                        <p className='modal__text'>Puedes consultar tu orden en el historial</p>
                    </Modal.Body>
                    <Modal.Footer className='modal__footer'>
                        <Button className='modal__button' variant="dark" onClick={close}>
                            Cerrar
                        </Button>
                    </Modal.Footer>
                </div>
            </Modal>
        </>
    )
};
export default memo(ModalCheckout);
