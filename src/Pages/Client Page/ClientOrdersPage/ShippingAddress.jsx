import styles from "./OrderDetails.module.css";

const ShippingAddress = ({ address }) => {
  if (!address) return null;

  return (
    <section className={styles.card}>
      <div className={styles.sectionHeader}>
        <h2>Shipping Address</h2>
        <i className="fa-solid fa-location-dot"></i>
      </div>

      <div className={styles.addressContent}>
        <div className={styles.addressIcon}>
          <i className="fa-solid fa-house"></i>
        </div>

        <div>
          <h3>{address.fullName}</h3>
          <p>{address.address}</p>
          <p>{address.city}</p>
          <p>{address.phone}</p>
        </div>
      </div>
    </section>
  );
};

export default ShippingAddress;
