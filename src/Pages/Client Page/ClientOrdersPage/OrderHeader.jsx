// import { Link } from "react-router-dom";
import styles from "./OrderDetails.module.css";

const OrderHeader = ({ order, setSelectedOrder }) => {
  return (
    <div className={styles.header}>
      <div>
        <div
          className={styles.backLink}
          onClick={() => {
            setSelectedOrder("");
          }}
        >
          <i className="fa-solid fa-arrow-left"></i>
          Back to My Orders
        </div>

        <h1>Order Details</h1>

        <p>
          Order <strong>#{order.orderNumber}</strong>
        </p>
      </div>

      <button className={styles.printButton} onClick={() => window.print()}>
        <i className="fa-solid fa-print"></i>
        Print Order
      </button>
    </div>
  );
};

export default OrderHeader;
