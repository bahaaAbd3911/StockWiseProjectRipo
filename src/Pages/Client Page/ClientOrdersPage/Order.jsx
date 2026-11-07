// Import Style
import {
  OrderContainerClass,
  orderLogoClass,
  orderDataClass,
  orderImagesClass,
  orderPriceClass,
  orderViewDetailsBtnClass,
  orderImgClass,
  arborderViewDetailsBtnClass,
  DeliveredOrderContainerClass,
  ShippingOrderContainerClass,
  PendingOrderContainerClass,
} from "./ClientOrdersPage.module.css";

// Import Images
import img1 from "../../../Images/AirFrier.jpg";

// Import Hooks
import { useState, useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
function Order({ item }) {
  const { dark, lang, setSearchFilters, userList, setUserList } =
    useContext(AuthContext);

  return (
    <>
      <div
        className={`${OrderContainerClass} 
        ${item.orderState === "Delivered" && DeliveredOrderContainerClass} 
        ${item.orderState === "Shipping" && ShippingOrderContainerClass} 
        ${item.orderState === "Pending" && PendingOrderContainerClass}`}
      >
        <div className={orderLogoClass}>
          {item.orderState === "Delivered" && (
            <i className="fa-solid fa-bag-shopping"></i>
          )}
          {item.orderState === "Shipping" && (
            <i className="fa-solid fa-truck"></i>
          )}
          {item.orderState === "Pending" && (
            <i className="fa-solid fa-circle-check"></i>
          )}
        </div>
        <div className={orderDataClass}>
          <div>
            {lang === "arb" ? "الطلب رقم" : "Order"} {item.orderNumber}
          </div>
          <div>{item.orderTime}</div>
          <div>{lang === "arb" ? item.arbOrderState : item.orderState}</div>
        </div>
        <div className={orderImagesClass}>
          <div className={orderImgClass}>
            <img src={img1} />
          </div>
          <div className={orderImgClass}>
            <img src={img1} />
          </div>
          <div className={orderImgClass}>
            <img src={img1} />
          </div>
        </div>
        <div className={orderPriceClass}>
          <div>
            {lang === "arb" ? "التكلفة" : "Cost"} {item.orderCost}
          </div>
          <div>
            {item.orderItemsCount} {lang === "arb" ? "عناصر" : "Items"}
          </div>
        </div>
        <div
          className={`${orderViewDetailsBtnClass} ${lang === "arb" && arborderViewDetailsBtnClass}`}
        >
          <div>
            <i className="fa-solid fa-eye"></i>
          </div>
          <div>{lang === "arb" ? "عرض التفاصيل" : "View Details"}</div>
          <div>
            <i className="fa-solid fa-angle-right"></i>
          </div>
        </div>
      </div>
    </>
  );
}
export default Order;
