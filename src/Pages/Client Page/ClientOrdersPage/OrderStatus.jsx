import styles from "./OrderDetails.module.css";

const OrderStatus = ({ status }) => {
  const statusConfig = {
    Pending: {
      icon: "fa-clock",
      description: "Your order is waiting for confirmation.",
    },
    Processing: {
      icon: "fa-box",
      description: "Your order is being prepared.",
    },
    Shipped: {
      icon: "fa-truck-fast",
      description: "Your order is on its way.",
    },
    Delivered: {
      icon: "fa-circle-check",
      description: "Your order has been delivered successfully.",
    },
    Cancelled: {
      icon: "fa-circle-xmark",
      description: "This order has been cancelled.",
    },
  };

  const currentStatus = statusConfig[status] || statusConfig.Pending;

  return (
    <section className={styles.statusCard}>
      <div className={styles.statusIcon}>
        <i className={`fa-solid ${currentStatus.icon}`}></i>
      </div>

      <div>
        <span className={styles.statusLabel}>ORDER STATUS</span>
        <h3>{status}</h3>
        <p>{currentStatus.description}</p>
      </div>

      <span className={styles.statusBadge}>{status}</span>
    </section>
  );
};

export default OrderStatus;
