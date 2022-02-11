import "./Modal.css";

function LotsModal({ setOpenModal }) {
  return (
    <div>
      <button
        className="modal-button"
        onClick={() => {
          setOpenModal(false);
        }}
      >
        x
      </button>
      <h2>Compatible Homes:</h2>
    </div>
  );
}

export default LotsModal;
