import React, { useState } from 'react';
import style from './Modal.module.css';

function Modal({ showModal, setShowModal, title, content }) {
  const isOpenModal = showModal ? (style.displayBlock) : (style.displayNone);

  return (
    <div className={isOpenModal}>
      <section className={style.modalMain}>
        <h2>{title}</h2>
        <div className={style.modalContent}>
        {content}
        </div>
        <div className={style.buttonContainer}>
          <button
            onClick={setShowModal}
            className={style.button}
          >
            Cerrar
          </button>
        </div>
      </section>
    </div>
  );
}

export default Modal;
