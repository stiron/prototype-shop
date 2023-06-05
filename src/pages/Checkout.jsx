import { useMemo } from "react";
import useOrders from "../hooks/useOrders";
import usePrototypes from "../hooks/usePrototypes";
import CancelButton from "../components/CancelButton";

export default function Checkout() {
  const orders = useOrders();
  const prototypes = usePrototypes();

  const totalPrice = useMemo(() => {
    return orders
      .map((order) => {
        const { id, quantity } = order;
        const prototype = prototypes.find((p) => p.id === id);
        return prototype.price * quantity;
      })
      .reduce((l, r) => l + r, 0);
  }, [orders, prototypes]);

  //   if (orders.length === 0) {
  //     return (
  //       <aside>
  //         <div className="empty">
  //           <div className="title">You don't have any orders</div>
  //           <div className="subtitle">Click on a + to add an order</div>
  //         </div>
  //       </aside>
  //     );
  //   }
  return (
    <aside>
      <div className="title">Checkout</div>
      <div className="order">
        <div className="body">
          {orders.map((order) => {
            const { id } = order;
            const prototype = prototypes.find((p) => p.id === id);
            return (
              <div className="item" key={id}>
                <div className="img">
                  <video src={prototype.thumbnail} />
                </div>
                <div className="content">
                  <p className="title">
                    {prototype.title} x {order.quantity}
                  </p>
                </div>
                <div className="action">
                  <p className="price">$ {prototype.price * order.quantity}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="total">
          <hr />
          <div className="item">
            <div className="content">Total</div>
            <div className="action">
              <div className="price">$ {totalPrice}</div>
            </div>
          </div>
        </div>
        <div className="btn-group">
          <button
            className="btn btn--secondary"
            style={{ width: "100%", marginTop: 10 }}
          >
            Payment
          </button>
          <CancelButton />
        </div>
      </div>
    </aside>
  );
}
