// Import Style
import {
  paymentMethodConatinerClass,
  leftSecConatinerClass,
  rightSecConatinerClass,
  methodTitleClass,
  nightPaymentMethodConatinerClass,
  activeMethodClass,
} from "./PaymentMethod.module.css";

// Import Hooks
import { useState, useContext } from "react";
import { AuthContext } from "../../../../context/AuthContext";

// Import Component
import Icon from "../../../../Components/Icon/Icon";

function Method({ method }) {
  const { lang, dark, orderFormFields, setorderFormFields } =
    useContext(AuthContext);
  return (
    <>
      <div
        className={`${paymentMethodConatinerClass} ${!dark && nightPaymentMethodConatinerClass} ${orderFormFields[7].data === method.title ? activeMethodClass : ""}`}
        onClick={() => {
          setorderFormFields((prev) => {
            let updated = [...prev];
            updated[7].data = method.title;
            updated[7].flag = false;
            updated[7].errorMsg = "";
            updated[7].arbErrorMsg = "";
            return updated;
          });
        }}
      >
        <div className={leftSecConatinerClass}>
          <Icon iconSrc={method.src} />
          <div className={methodTitleClass}>
            <div>{lang === "arb" ? method.arbTitle : method.title}</div>
            <div>{lang === "arb" ? method.arbSubTitle : method.subTitle}</div>
          </div>
        </div>
        <div className={rightSecConatinerClass}>
          {lang === "arb" && method.isAvailable && "متاح"}
          {lang !== "arb" && method.isAvailable && "Available"}
          {lang === "arb" && !method.isAvailable && "غثر متاح"}
          {lang !== "arb" && !method.isAvailable && "Not Available Yet"}
        </div>
      </div>
    </>
  );
}

export default Method;
