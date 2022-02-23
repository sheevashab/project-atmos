import "./Modal.css";
import HomePlanCard from "../../components/Cards/HomePlanCard";
import { useSelector } from "react-redux";

function HomePlansModal({ setOpenModal }) {
  const homePlans = useSelector((state) => state.homePlans);
  const homePlanId = useSelector((state) => homePlans.homePlanId);

  const combinations = useSelector((state) => state.combinations);
  const combinationId = useSelector((state) => combinations.homePlanId);

  const lots = useSelector((state) => state.lots);
  const lotId = useSelector((state) => lots.lotId);

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
        <div className="modal-list">
          Compatible Lots:
          {homePlans
            //map through home plans
            //condition - if homePlans.homePlanId === cominations.homePlanId
            //return lot card on modal view
            .filter((homePlan) => homePlanId === combinationId)
            .map((lot) => (
              <li key={combinations.homePlanId} className="modal-item">
                {lot.lotId}
              </li>
            ))}
        </div>
      </div>
    </div>
  );
}

export default HomePlansModal;
