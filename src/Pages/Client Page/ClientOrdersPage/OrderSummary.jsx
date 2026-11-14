import styles from "./OrderDetails.module.css";

const OrderSummary = ({ order }) => {
  const subtotal = Number(order.orderCost);
  const shipping = Number(order.orderFee);
  const total = subtotal + shipping;

  return (
    <section className={styles.card}>
      <div className={styles.sectionHeader}>
        <h2>Order Summary</h2>
      </div>

      <div className={styles.summaryRows}>
        <div>
          <span>Subtotal</span>
          <strong>{subtotal.toFixed(2)} JD</strong>
        </div>

        <div>
          <span>Shipping Fee</span>
          <strong>{shipping.toFixed(2)} JD</strong>
        </div>

        <div className={styles.paymentMethod}>
          <span>Payment Method</span>
          <strong>{order.orderPaymentMethod}</strong>
        </div>
      </div>

      <div className={styles.totalRow}>
        <span>Total Amount</span>
        <strong>{total.toFixed(2)} JD</strong>
      </div>
    </section>
  );
};

export default OrderSummary;
