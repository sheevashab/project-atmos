import "./HomePlans.css";
import Layout from "../../components/Layout/Layout";
import ShowSavedHomes from "../../components/ShowButtons/ShowSavedHomes";
import HomePlanCard from "../../components/Cards/HomePlanCard";
import { useSelector } from "react-redux";

export default function HomePlans() {
  const homePlans = useSelector((state) => state.homePlans);

  return (
    <Layout>
      <div className="home-container">
        <ShowSavedHomes />
        <div className="modal-button">
          <ul className="list">
            {homePlans.map((homePlan) => (
              <li className="card" key={homePlan.homePlanId}>
                <HomePlanCard key={homePlan.name} value={homePlan} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
}
