// Modal.js
import React from "react";
import "./Modal.css"; // Import CSS for modal styling

const Modal = ({ show, onClose, readMore }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        <h2>Read More</h2>
        <p>{readMore}</p>
      </div>
    </div>
  );
};

export default Modal;
