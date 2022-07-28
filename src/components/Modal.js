import reactDom from "react-dom";
import "./css/Modal.css";

export default function Modal({ children, handleClose }) {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        {children}
        <button className="modal-close"  onClick={handleClose}>Close</button>
      </div>
    </div>
  );
}
