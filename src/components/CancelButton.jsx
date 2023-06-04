import { useHistory } from "react-router-dom";

export default function CancelButton() {
  const history = useHistory();

  function checkout() {
    history.push("/");
    window.location.reload();
    console.log("----홈 페이지로 이동---------");
  }
  return (
    <button
      className="btn btn--secondary"
      style={{ width: "100%", marginTop: 10 }}
      onClick={checkout}
    >
      Cancel
    </button>
  );
}
