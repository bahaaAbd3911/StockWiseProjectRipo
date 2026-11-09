import styles from "./OrderDetails.module.css";

import OrderHeader from "./OrderHeader";
import OrderStatus from "./OrderStatus";
import OrderItems from "./OrderItems";
import OrderSummary from "./OrderSummary";
import ShippingAddress from "./ShippingAddress";
import OrderTimeline from "./OrderTimeline";

const OrderDetails = ({ order, setSelectedOrder }) => {
  if (!order) {
    return <div className={styles.notFound}>Order not found.</div>;
  }
  return (
    <main className={styles.orderDetails}>
      <OrderHeader order={order} setSelectedOrder={setSelectedOrder} />

      <OrderStatus status={order.orderStatus} />

      <div className={styles.mainGrid}>
        <div className={styles.leftColumn}>
          <OrderItems items={order.orderItems} />

          <OrderTimeline
            status={order.orderStatus}
            orderDate={order.orderDate}
          />
        </div>

        <div className={styles.rightColumn}>
          <OrderSummary order={order} />

          <ShippingAddress address={order.shippingAddress} />
        </div>
      </div>
    </main>
  );
};

export default OrderDetails;
