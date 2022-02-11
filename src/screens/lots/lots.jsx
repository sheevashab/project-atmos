import "./Lots.css";
import Layout from "../../components/Layout/Layout";
import ShowSavedLots from "../../components/ShowButtons/ShowSavedLots";
import LotCard from "../../components/Cards/LotCard";

export default function Lots() {
  return (
    <Layout>
      <div className="lot-container">
        <ShowSavedLots />
        <div className="modal-button">
          <LotCard />
        </div>
      </div>
    </Layout>
  );
}
