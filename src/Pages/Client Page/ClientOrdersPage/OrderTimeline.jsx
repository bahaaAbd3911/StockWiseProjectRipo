import styles from "./OrderDetails.module.css";

const OrderTimeline = ({ status, orderDate }) => {
  const steps = [
    {
      title: "Order Placed",
      description: "Your order has been received.",
      icon: "fa-clipboard-check",
    },
    {
      title: "Processing",
      description: "Your products are being prepared.",
      icon: "fa-box",
    },
    {
      title: "Shipped",
      description: "Your order is on its way.",
      icon: "fa-truck-fast",
    },
    {
      title: "Delivered",
      description: "Your order has arrived.",
      icon: "fa-house-circle-check",
    },
  ];

  const statusIndex = {
    Pending: 0,
    Processing: 1,
    Shipped: 2,
    Delivered: 3,
    Cancelled: -1,
  };

  const currentIndex = statusIndex[status] ?? 0;

  const formattedDate = new Date(orderDate).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <section className={styles.card}>
      <div className={styles.sectionHeader}>
        <h2>Order Timeline</h2>
      </div>

      <div className={styles.timeline}>
        {steps.map((step, index) => {
          const completed = index <= currentIndex;

          return (
            <div
              key={step.title}
              className={`${styles.timelineStep} ${
                completed ? styles.completed : ""
              }`}
            >
              <div className={styles.timelineIcon}>
                <i className={`fa-solid ${step.icon}`}></i>
              </div>

              <div className={styles.timelineContent}>
                <h3>{step.title}</h3>

                <p>{step.description}</p>

                {index === 0 && <span>{formattedDate}</span>}

                {index === currentIndex && (
                  <span className={styles.currentStep}>Current Status</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default OrderTimeline;
