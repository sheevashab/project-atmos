import "./Lots.css";
import Layout from "../../components/Layout/Layout";
import ShowSavedLots from "../../components/ShowButtons/ShowSavedLots";
import { useSelector } from "react-redux";

export default function Lots() {
  const lots = useSelector((state) => state.lots);

  return (
    <Layout>
      <div className="lot-container">
        <ShowSavedLots />
        <ul className="lot-list">
          {lots.map((lot) => (
            <div key={lot.lotId} className="lot-card">
              <div className="lot-card-button">
                <img src={lot.image} alt="lot view" className="lot-image" />
                <h2>Lot {lot.lotId}</h2>
                <h3>
                  {lot.address}
                  <br />
                  {lot.acres} acres - {(lot.acres * 43560).toFixed(0)} sqft
                </h3>
                <p>{lot.description}</p>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
