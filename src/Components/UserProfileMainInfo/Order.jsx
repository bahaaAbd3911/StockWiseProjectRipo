// Imort Style
import {
  RecentOrdersDataClass,
  imgContainerClass,
  waitingClass,
  shippingClass,
  deliveredClass,
} from "./UserProfileMainInfo.module.css";

// Import Hooks
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function Order({ data }) {
  const { lang, dark } = useContext(AuthContext);

  let statusx = data.orderStatuse;
  return (
    <>
      <div className={RecentOrdersDataClass}>
        <div>
          <div className={imgContainerClass}>
            <img src={data.productImage} />
          </div>
          <div>
            <div>Order #{data.orderNumber}</div>
            <div>{data.orderDate}</div>
          </div>
        </div>
        <div
          className={
            statusx === "waitingList"
              ? waitingClass
              : statusx === "shipping"
                ? shippingClass
                : statusx === "delivered"
                  ? deliveredClass
                  : ""
          }
        >
          {lang !== "arb" && statusx === "waitingList"
            ? "On Waiting List"
            : lang === "arb" && statusx === "shipping"
              ? "Shipping"
              : lang === "arb" && statusx === "delivered"
                ? "Delivered"
                : ""}

          {lang === "arb" && statusx === "waitingList"
            ? "على قائمة الانتظار"
            : lang === "arb" && statusx === "shipping"
              ? "جار شحنها"
              : lang === "arb" && statusx === "delivered"
                ? "تم التوصيل"
                : ""}
        </div>
      </div>
    </>
  );
}

export default Order;
