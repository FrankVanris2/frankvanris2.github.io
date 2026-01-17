import React from "react";
import "../styles/Modal.css";
import ReactDom from "react-dom";

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return ReactDom.createPortal (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>✖</button>
                {children}
            </div>
        </div>,
        document.body
    );
};

export default Modal;