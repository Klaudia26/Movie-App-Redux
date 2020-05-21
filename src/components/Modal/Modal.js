import React from 'react';
import ReactDOM from 'react-dom';
import { IoMdClose } from 'react-icons/io';
import './Modal.scss';

const Modal = ({ closeModal, body, action }) => {
  return ReactDOM.createPortal(
    <div className="dimmer" onClick={closeModal}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal__header">
          <IoMdClose className="close-icon" onClick={closeModal} />
        </div>
        <div className="modal__content">{body}</div>
        <div className="modal__actions">{action}</div>
      </div>
    </div>,
    document.getElementById('modal')
  );
};

export default Modal;
