import "./Card.css";
import HomePlansModal from "../../components/Modal/HomePlansModal";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toggleSaved } from "../../redux/homePlans";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

export default function HomePlans() {
  const dispatch = useDispatch();
  const homePlans = useSelector((state) => state.homePlans);
  const homePlanId = useSelector((state) => homePlans.homePlanId);
  const saved = useSelector((state) => homePlans.saved);

  const [openModal, setOpenModal] = useState(false);

  const handleSavedClick = () => {
    dispatch(toggleSaved({ homePlanId: homePlanId, saved: !saved }));
  };

  return (
    <ul className="list">
      {homePlans.map((homePlan) => (
        <div key={homePlan.homePlanId} className="card">
          <button
            className="modal-button"
            onClick={() => {
              setOpenModal(true);
            }}
          >
            <img src={homePlan.image} alt="house exterior" className="image" />
            <div className="button-save" onClick={handleSavedClick}>
              {saved === false ? (
                <FontAwesomeIcon icon={faHeart} />
              ) : (
                <FontAwesomeIcon icon={farHeart} />
              )}
            </div>
            <h2>{homePlan.name}</h2>
            <h3>
              {homePlan.numBeds} beds - {homePlan.numBaths} baths -{" "}
              {homePlan.sqft} sqft
            </h3>
            <h4 className="tags">{homePlan.tags}</h4>
            <p>{homePlan.description}</p>
          </button>
          {openModal && <HomePlansModal setOpenModal={setOpenModal} />}
        </div>
      ))}
    </ul>
  );
}
