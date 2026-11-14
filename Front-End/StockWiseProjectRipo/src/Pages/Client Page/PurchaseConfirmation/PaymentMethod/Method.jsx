// Import Style
import {
  paymentMethodConatinerClass,
  leftSecConatinerClass,
  rightSecConatinerClass,
  methodTitleClass,
  nightPaymentMethodConatinerClass,
} from "./PaymentMethod.module.css";

// Import Hooks
import { useState, useContext } from "react";
import { AuthContext } from "../../../../context/AuthContext";

// Import Component
import Icon from "../../../../Components/Icon/Icon";

function Method({ method }) {
  const { lang, dark } = useContext(AuthContext);

  return (
    <>
      <div
        className={`${paymentMethodConatinerClass} ${!dark && nightPaymentMethodConatinerClass}`}
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
