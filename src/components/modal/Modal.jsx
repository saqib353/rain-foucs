import React from 'react';
import '../../sass/modal.scss';
import Menu from '../sidebar/menu';
import Logo from '../../assets/images/Icon.png';

const Modal = ({ setIsOpen }) => {
  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="menu-wrapper">
        <div className="modal-header">
          <img src={Logo} alt="Rain focus" onClick={() => setIsOpen((prev) => !prev)} />
          <button className="edit-event-btn" onClick={() => setIsOpen((prev) => !prev)}>
            EDIT EVENT
          </button>
        </div>
        <Menu setIsOpen={setIsOpen} />
      </div>
    </>
  );
};

export default Modal;
