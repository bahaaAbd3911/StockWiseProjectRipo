// Import Style
import {
  PurchaseConfirmationHeaderContainerClass,
  backToCartBtnClass,
} from "./PurchaseConfirmation.module.css";

// Import Hooks
import { useNavigate } from "react-router";

// Import Hooks
import { useState, useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";

function PurchaseConfirmationHeader() {
  const { dark, lang, orderStages, setOrderStages } = useContext(AuthContext);

  let navigate = useNavigate();

  return (
    <>
      <div className={PurchaseConfirmationHeaderContainerClass}>
        <div
          className={backToCartBtnClass}
          onClick={() => {
            navigate("/client/shoppingList");
          }}
        >
          <div>
            <i className="fa-solid fa-arrow-left-long"></i>
          </div>
          <div>{lang === "arb" ? "العودة الى سلة التسوق" : "Back To Cart"}</div>
        </div>
        <div>
          <h1>{lang === "arb" ? "قم بتقديم طلبك" : "Place Your Order"}</h1>
          <h5>
            {lang === "arb"
              ? `أكمل معلوماتك واختر طريقة الدفع لإتمام طلبك.`
              : `Complete Your Information And Choose Your Payment Method To Place
            Your Order.`}
          </h5>
        </div>
      </div>
    </>
  );
}

export default PurchaseConfirmationHeader;
