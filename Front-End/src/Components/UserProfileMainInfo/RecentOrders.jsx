// Imort Style
import {
  RecentOrdersContainerClass,
  RecentOrdersHeaderClass,
  ordersListClass,
  darkRecentOrdersContainerClass,
} from "./UserProfileMainInfo.module.css";

// Import Context
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

// Import Components
import Order from "./Order";

function RecentOrders() {
  const { userOrders, lang, dark } = useContext(AuthContext);

  let statusx = "delivered";
  const someUserOrders = [userOrders[0], userOrders[1]];
  return (
    <>
      <div
        className={`${RecentOrdersContainerClass} ${dark && darkRecentOrdersContainerClass}`}
      >
        <div className={RecentOrdersHeaderClass}>
          <div>
            <div>
              <i className="fa-solid fa-clock"></i>
            </div>
            <div>{lang === "arb" ? "الطلبات السابقة" : "Recent Orders"}</div>
          </div>
          <div>
            <div>{lang === "arb" ? "عرض الكل" : "View All"}</div>
            <div>
              <i className="fa-solid fa-arrow-right-long"></i>
            </div>
          </div>
        </div>
        <div className={ordersListClass}>
          {someUserOrders.map((orderData, index) => (
            <Order data={orderData} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}

export default RecentOrders;
