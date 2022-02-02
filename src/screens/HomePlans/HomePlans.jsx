import "./HomePlans.css";
import Layout from "../../components/Layout/Layout";
import { Component } from "react";
import { connect } from "react-redux";

class HomePlans extends Component {
  render() {
    const { homePlans } = this.props;
    const homePlansList = homePlans.length ? (
      homePlans.map((homePlan) => {
        return (
          <div key={homePlan.homePlanId} className="home-card">
            <button>
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
              <h4 className="home-tags">{homePlan.tags}</h4>
              <p>{homePlan.description}</p>
            </button>
          </div>
        );
      })
    ) : (
      <div>Loading...</div>
    );

    return (
      <Layout>
        <button className="button-show">Show Saved Homes</button>
        <div className="home-container">
          <div className="home-list">{homePlansList}</div>
        </div>
      </Layout>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    homePlans: state.homePlans,
  };
};

export default connect(mapStateToProps)(HomePlans);
