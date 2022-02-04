import "./Modal.css";

function HomePlansModal({ setOpenModal }) {
  return (
    <div className="modal-background">
      <div className="modal-container">
        <button
          className="modal-button"
          onClick={() => {
            setOpenModal(false);
          }}
        >
          x
        </button>
        <div className="modal-combinations">
          Here is the list of matching combinations
        </div>
      </div>
    </div>
  );
}

export default HomePlansModal;
