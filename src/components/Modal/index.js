import React, { useState } from 'react';
import style from './Modal.module.css';

function Modal({ showModal, setShowModal, title, content }) {
  const isOpenModal = showModal ? (style.displayBlock) : (style.displayNone);

  return (
    <div className={isOpenModal}>
      <section className={style.modalMain}>
        <h2>{title}</h2>
        {content}
        <div className={style.buttonContainer}>
          <button
            onClick={setShowModal}
          >
            Cerrar
          </button>
        </div>
      </section>
    </div>
  );
}

export default Modal;
