import "./HomePlans.css";
import Layout from "../../components/Layout/Layout";
import ShowSavedHomes from "../../components/ShowButtons/ShowSavedHomes";
import HomePlansModal from "../../components/Modal/HomePlansModal";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { toggleSaved } from "../../redux/homePlans";
import { useDispatch, useSelector } from "react-redux";

export default function HomePlans() {
  const [modalOpen, setModalOpen] = useState(false);

  const dispatch = useDispatch();
  const homePlans = useSelector((state) => state.homePlans);
  const homePlanId = useSelector((state) => state.homePlans.homePlanId);
  const saved = useSelector((state) => state.homePlans.saved);

  const handleSavedClick = () => {
    dispatch(toggleSaved({ homePlanId: homePlanId, saved: !saved }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    setModalOpen(!modalOpen);
  };

  return (
    <Layout>
      <div className="home-container">
        <ShowSavedHomes />
        <ul className="home-list">
          {homePlans.map((homePlan) => (
            <div key={homePlan.homePlanId} className="home-card">
              <div className="home-card-button">
                <img
                  src={homePlan.image}
                  alt="house exterior"
                  className="home-image"
                />
                <button className="button-save" onClick={handleSavedClick}>
                  {saved === false ? (
                    <FontAwesomeIcon icon={farHeart} />
                  ) : (
                    <FontAwesomeIcon icon={faHeart} />
                  )}
                </button>
                <h2>{homePlan.name}</h2>
                <h3>
                  {homePlan.numBeds} beds - {homePlan.numBaths} baths -{" "}
                  {homePlan.sqft} sqft
                </h3>
                <h4 className="home-tags">{homePlan.tags}</h4>
                <p>{homePlan.description}</p>
              </div>
              <HomePlansModal onClick={handleClick} />
            </div>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
