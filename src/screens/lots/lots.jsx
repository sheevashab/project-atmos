import "./Lots.css";
import Layout from "../../components/Layout/Layout";
import { Component } from "react";
import { connect } from "react-redux";

class Lots extends Component {
  render() {
    const { lots } = this.props;
    const lotsList = lots.length ? (
      lots.map((lot) => {
        return (
          <div key={lot.lotId}>
            <img src={lot.image} alt="snapshot of lot" className="lot-image" />
            <h2>{lot.address}</h2>
            <h3>{lot.acres} acres</h3>
            <p>{lot.description}</p>
          </div>
        );
      })
    ) : (
      <div>Loading...</div>
    );

    return (
      <Layout>
        <div className="lot-list">
          <div className="lot-card">{lotsList}</div>
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lots: state.lots,
  };
};

export default connect(mapStateToProps)(Lots);
