import "./Card.css";
import LotsModal from "../../components/Modal/LotsModal";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function Lots() {
  const [openModal, setOpenModal] = useState(false);

  const lots = useSelector((state) => state.lots);

  return (
    <ul className="list">
      {lots.map((lot) => (
        <div key={lot.lotId} className="card">
          <button
            className="modal-button"
            onClick={() => {
              setOpenModal(true);
            }}
          >
            <img src={lot.image} alt="lot view" className="image" />
            <h2>Lot {lot.lotId}</h2>
            <h3>
              {lot.address}
              <br />
              {lot.acres} acres - {(lot.acres * 43560).toFixed(0)} sqft
            </h3>
            <p>{lot.description}</p>
          </button>
          {openModal && <LotsModal setOpenModal={setOpenModal} />}
        </div>
      ))}
    </ul>
  );
}
