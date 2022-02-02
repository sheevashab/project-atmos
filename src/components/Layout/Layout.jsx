import "./Layout.css";
import SideBar from "../SideBar/SideBar";

export default function Layout(props) {
  return (
    <div className="layout">
      <SideBar />
      <div>
        <div className="layout-children">{props.children}</div>
      </div>
    </div>
  );
}
