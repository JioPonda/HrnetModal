import "./Modal.css";
import React from "react";

// fonction d'affichage de la modale
export function displayModal() {
  const modal = document.querySelector("#confirmation");
  modal.style.display = "block";
}
// fonction de cache de la modale
export function hideModal() {
  const modal = document.querySelector("#confirmation");
  modal.style.display = "none";
}

function Modal({ Text }) {
  return (
    <div id="confirmation" className="modal">
      <p onClick={hideModal} className="close-modal">
        X
      </p>

      <p className="text-modal">{Text}</p>
    </div>
  );
}

export default Modal;
