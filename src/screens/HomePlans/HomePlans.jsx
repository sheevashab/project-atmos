import "./HomePlans.css";
import { Component } from "react";
import { connect } from "react-redux";

class HomePlans extends Component {
  render() {
    const { homePlans } = this.props;
    const homePlansList = homePlans.length ? (
      homePlans.map((homePlan) => {
        return (
          <div key={homePlan.homePlanId}>
            <img
              src={homePlan.image}
              alt="house exterior"
              className="home-image"
            />
            <h2>{homePlan.name}</h2>
            <h3>
              {homePlan.numBeds} beds - {homePlan.numBaths} baths -{" "}
              {homePlan.sqft} sqft
            </h3>
            <h4>{homePlan.tags}</h4>
            <p>{homePlan.description}</p>
          </div>
        );
      })
    ) : (
      <div>Loading...</div>
    );

    return (
      <div className="home-list">
        <div className="home-card">{homePlansList}</div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    homePlans: state.homePlans,
  };
};

export default connect(mapStateToProps)(HomePlans);
