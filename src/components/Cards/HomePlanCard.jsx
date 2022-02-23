import "./Card.css";
import HomePlansModal from "../../components/Modal/HomePlansModal";
import { faHeart as faHeartInactive } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartActive } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toggleSaved } from "../../redux/homePlans";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

export default function HomePlans() {
  const dispatch = useDispatch();
  const homePlans = useSelector((state) => state.homePlans);
  const saved = useSelector((state) => state.homePlans.saved);
  const id = useSelector((state) => state.homePlans.homePlanId);

  const [openModal, setOpenModal] = useState(false);

  const handleSavedClick = (homePlanId) => {
    dispatch(toggleSaved({ homePlanId: homePlanId, saved: !saved }));
  };

  return (
    <ul className="list">
      {homePlans.map((homePlan) => {
        //NEED TO FIND CONDITION THAT STOPS MAP FROM RETURNING ALL HOUSEPLANS
        if (id == homePlan.id)
          return (
            <div className="card" key={homePlan.homePlanId}>
              <img
                src={homePlan.image}
                alt="house exterior"
                className="image"
              />
              <button
                className="button-save"
                onClick={() => handleSavedClick(homePlan.homePlanId)}
              >
                {saved === false ? (
                  <FontAwesomeIcon icon={faHeartInactive} />
                ) : (
                  <FontAwesomeIcon icon={faHeartActive} />
                )}
              </button>
              <button
                className="modal-button"
                onClick={() => {
                  setOpenModal(true);
                }}
              >
                Modal
              </button>
              <h2>{homePlan.name}</h2>
              <h3>
                {homePlan.numBeds} beds - {homePlan.numBaths} baths -{" "}
                {homePlan.sqft} sqft
              </h3>
              <h4 className="tags">{homePlan.tags}</h4>
              <p>{homePlan.description}</p>
              {openModal && <HomePlansModal setOpenModal={setOpenModal} />}
            </div>
          );
      })}
    </ul>
  );
}
