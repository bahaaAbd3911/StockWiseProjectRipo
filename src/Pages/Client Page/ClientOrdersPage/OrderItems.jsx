import styles from "./OrderDetails.module.css";

const OrderItems = ({ items = [] }) => {
  return (
    <section className={styles.card}>
      <div className={styles.sectionHeader}>
        <h2>Ordered Products</h2>
        <span>{items.length} Items</span>
      </div>

      <div className={styles.itemsList}>
        {items.map((item, index) => (
          <div className={styles.productItem} key={index}>
            <img src={item.productImage} alt={item.productName} />

            <div className={styles.productInfo}>
              <h3>{item.productName}</h3>

              <p>Quantity: {item.quantity}</p>
            </div>

            <div className={styles.productPrice}>
              <strong>
                {(item.productPrice * item.quantity).toFixed(2)} JD
              </strong>

              <span>{item.productPrice} JD / unit</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OrderItems;
