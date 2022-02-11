import "./ShowButton.css";
import { useSelector } from "react-redux";

function ShowSavedHomes() {
  const homePlans = useSelector((state) => state.homePlans);
  const saved = useSelector(() => homePlans.saved);

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   homePlans.filter((homePlan) => (
  //     //if saved == true, show HomePlanCard
  //   ))
  // };
  //filter logic
  //onClick show only objects where state of saved === true
  //need to access Redux for "saved" key and its value

  return (
    <button
      className="button-show"
      // onClick={handleClick}
    >
      Show Saved Homes
    </button>
  );
}

export default ShowSavedHomes;
