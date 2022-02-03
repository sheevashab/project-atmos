import "./HomePlans.css";
import Layout from "../../components/Layout/Layout";
import { Component } from "react";
// import { connect } from "react-redux";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toggleSaved } from "../../redux/homePlans";
import { useDispatch, useSelector } from "react-redux";

export default function HomePlans() {
  const dispatch = useDispatch();
  const homePlans = useSelector((state) => state.homePlans);
  // const { saved } = useSelector((state) => state.homePlans.saved);

  return (
    <Layout>
      <div className="home-container">
        <button className="button-show">Show Saved Homes</button>
        <ul className="home-list">
          {homePlans.map((homePlan) => (
            <div key={homePlan.homePlanId} className="home-card">
              <button>
                <img
                  src={homePlan.image}
                  alt="house exterior"
                  className="home-image"
                />
                {/* <button onClick={() => dispatch(toggleSaved())}>Like</button> */}
                {/* <div
                className="button-save"
                onClick={() => dispatch(toggleSaved)}
              >
                {this.props.saved === false ? (
                  <FontAwesomeIcon icon={farHeart} />
                ) : (
                  <FontAwesomeIcon icon={faHeart} />
                )}
              </div> */}
                <h2>{homePlan.name}</h2>
                <h3>
                  {homePlan.numBeds} beds - {homePlan.numBaths} baths -{" "}
                  {homePlan.sqft} sqft
                </h3>
                <h4 className="home-tags">{homePlan.tags}</h4>
                <p>{homePlan.description}</p>
              </button>
            </div>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
