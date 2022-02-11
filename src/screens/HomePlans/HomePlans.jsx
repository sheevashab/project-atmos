import "./HomePlans.css";
import Layout from "../../components/Layout/Layout";
import ShowSavedHomes from "../../components/ShowButtons/ShowSavedHomes";
import HomePlanCard from "../../components/Cards/HomePlanCard";

export default function HomePlans() {
  return (
    <Layout>
      <div className="home-container">
        <ShowSavedHomes />
        <div className="modal-button">
          <HomePlanCard />
        </div>
      </div>
    </Layout>
  );
}
