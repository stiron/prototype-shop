// import { withRouter } from "react-router-dom";
import { useHistory } from "react-router-dom";

// export default withRouter(function CheckoutButton(props) {
//   console.log("----****************---------");
//   console.log(props);
//   function checkout() {
//     setTimeout(() => {
//       props.history.push("/Checkout6");
//     }, 1000);
//     console.log("----체크아웃 페이지로 이동---------");
//   }
//   return (
//     <button
//       className="btn btn--secondary"
//       style={{ width: "100%", marginTop: 10 }}
//       onClick={checkout}
//     >
//       Checkout
//     </button>
//   )
// });

export default function CheckoutButton() {
  console.log("----****************---------");

  //   const navigate = useNavigate();
  const history = useHistory();

  function checkout() {
    // console.log(history);
    // navigate("/Checkout");
    history.push("/Checkout");
    window.location.reload();
    console.log("----체크아웃 페이지로 이동---------");
  }
  return (
    <button
      className="btn btn--secondary"
      style={{ width: "100%", marginTop: 10 }}
      onClick={checkout}
    >
      Checkout
    </button>
  );
}
