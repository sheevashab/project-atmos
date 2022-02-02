import "./SideBar.css";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <nav>
      <ul className="side-bar-list">
        <li className="side-bar-item">
          <Link to="/homeplans" className="side-bar-item">
            Home Plans
          </Link>
        </li>
        <li className="side-bar-item">
          <Link to="/lots" className="side-bar-item">
            Lots
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideBar;
