// Import Style
import {
  ClientOrdersPageContainerClass,
  arbClientOrdersPageContainerClass,
  ordersListClass,
} from "./ClientOrdersPage.module.css";

// Import Hooks
import { useState, useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";

// import Objects
import { ordersListArray } from "../../../objects";

// Import Components
import UserOrdersMainInfo from "./UserOrdersMainInfo";
import UserOrdersFilter from "./UserOrdersFilter";
import Order from "./Order";
import OrderDetails from "./OrderDetails";

function ClientOrdersPage() {
  const { dark, lang, setSearchFilters, userList, setUserList } =
    useContext(AuthContext);
  const [ordersList, setOrdersList] = useState(ordersListArray);

  const [selectedOrder, setSelectedOrder] = useState();
  function calcCount(list) {
    let length = list.length - 1;
    let counts = [0, 0, 0, 0];
    while (length > 0) {
      if (list[length].orderState === "Delivered") {
        counts[0]++;
        counts[3]++;
      }
      if (list[length].orderState === "Shipping") {
        counts[1]++;
        counts[3]++;
      }
      if (list[length].orderState === "Pending") {
        counts[2]++;
        counts[3]++;
      }

      length--;
    }
    return counts;
  }
  let counts = calcCount(ordersList);

  const [filters, setFilters] = useState([
    {
      name: "All Orders",
      arbName: "كل الطلبات",
      icon: <i className="fa-solid fa-list"></i>,
      count: counts[3],
      isActive: true,
    },
    {
      name: "Pending",
      arbName: "قيد الانتظار",
      icon: <i className="fa-solid fa-clock"></i>,
      count: counts[2],
      isActive: false,
    },
    {
      name: "Shipping",
      arbName: "طلبات جار شحنها",
      icon: <i className="fa-solid fa-truck"></i>,
      count: counts[1],
      isActive: false,
    },
    {
      name: "Delivered",
      arbName: "طلبات تم توصيلها",
      icon: <i className="fa-solid fa-circle-check"></i>,
      count: counts[0],
      isActive: false,
    },
  ]);
  const choosenFilter = filters.find((filter) => filter.isActive === true);

  const filteredList = ordersList.filter((order) =>
    choosenFilter.name === "All Orders"
      ? true
      : order.orderState === choosenFilter.name,
  );

  return (
    <>
      <div
        className={`${ClientOrdersPageContainerClass} ${lang === "arb" && arbClientOrdersPageContainerClass}`}
      >
        {selectedOrder ? (
          <OrderDetails
            order={selectedOrder}
            setSelectedOrder={setSelectedOrder}
          />
        ) : (
          <>
            <UserOrdersMainInfo />

            <UserOrdersFilter
              filters={filters}
              setFilters={setFilters}
              ordersList={ordersList}
            />
            <div className={ordersListClass}>
              {filteredList.map((item, index) => (
                <Order
                  item={item}
                  key={index}
                  setSelectedOrder={setSelectedOrder}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default ClientOrdersPage;
