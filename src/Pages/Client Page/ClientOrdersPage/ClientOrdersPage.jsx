// Import Style
import {
  ClientOrdersPageContainerClass,
  arbClientOrdersPageContainerClass,
  ordersListClass,
} from "./ClientOrdersPage.module.css";

// Import Hooks
import { useState, useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";

// Import Components
import UserOrdersMainInfo from "./UserOrdersMainInfo";
import UserOrdersFilter from "./UserOrdersFilter";
import Order from "./Order";

function ClientOrdersPage() {
  const { dark, lang, setSearchFilters, userList, setUserList } =
    useContext(AuthContext);
  const [filters, setFilters] = useState([
    {
      name: "All Orders",
      arbName: "كل الطلبات",
      icon: <i className="fa-solid fa-list"></i>,
      count: 3,
      isActive: true,
    },
    {
      name: "Pending",
      arbName: "قيد الانتظار",
      icon: <i className="fa-solid fa-clock"></i>,
      count: 1,
      isActive: false,
    },
    {
      name: "Shipping",
      arbName: "طلبات جار شحنها",
      icon: <i className="fa-solid fa-truck"></i>,
      count: 1,
      isActive: false,
    },
    {
      name: "Delivered",
      arbName: "طلبات تم توصيلها",
      icon: <i className="fa-solid fa-circle-check"></i>,
      count: 1,
      isActive: false,
    },
  ]);
  const [ordersList, setOrdersList] = useState([
    {
      orderState: "Delivered",
      arbOrderState: "تم التوصيل",
      orderNumber: 10,
      orderTime: "7/10/2026",
      orderImages: "",
      orderCost: "100%",
      orderItemsCount: "4",
    },
    {
      orderState: "Shipping",
      arbOrderState: "قيد الشحن",
      orderNumber: 10,
      orderTime: "7/10/2026",
      orderImages: "",
      orderCost: "100%",
      orderItemsCount: "4",
    },
    {
      orderState: "Pending",
      arbOrderState: "على قائمة الانتظار",
      orderNumber: 10,
      orderTime: "7/10/2026",
      orderImages: "",
      orderCost: "100%",
      orderItemsCount: "4",
    },
  ]);
  return (
    <>
      <div
        className={`${ClientOrdersPageContainerClass} ${lang === "arb" && arbClientOrdersPageContainerClass}`}
      >
        <UserOrdersMainInfo />
        <UserOrdersFilter filters={filters} setFilters={setFilters} />
        <div className={ordersListClass}>
          {ordersList.map((item) => (
            <Order item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ClientOrdersPage;
