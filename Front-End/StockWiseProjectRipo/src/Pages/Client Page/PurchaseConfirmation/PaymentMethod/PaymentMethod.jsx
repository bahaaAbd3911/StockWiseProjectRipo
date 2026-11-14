// Import Style
import { formContainerClass } from "../ShippingForm/ShippingForm.module.css";
import {
  paymentMethodsConatinerClass,
  btnContainerClass,
  NightBtnContainerClass,
} from "./PaymentMethod.module.css";
// Import Icons
import creditCard from "../../../../Images/Icon/contactless.png";

// Import Components
import FormHeader from "../FormHeader";
import Method from "./Method";

// Import Images
import visa from "../../../../Images/Icon/visa.png";
import paypal from "../../../../Images/Icon/paypal.png";
import dollar from "../../../../Images/Icon/dollar.png";

// Import Hooks
import { useState, useContext } from "react";
import { AuthContext } from "../../../../context/AuthContext";

function PaymentMethod({ setSelectedStage, selectedStage }) {
  const { lang, orderStages, dark, orderFormFields, setorderFormFields } =
    useContext(AuthContext);

  const methods = [
    {
      src: dollar,
      title: "Cash On Delivery",
      arbTitle: "الدفع عند الاستلام",
      subTitle: "Pay When You Receive Your Order",
      arbSubTitle: "ادفع عند استلام طلبك",
      isAvailable: true,
    },
    {
      src: visa,
      title: "Online Payment",
      arbTitle: "الدفع عبر الإنترنت",
      subTitle: "Pay Securely With Your Credit Or Debit Card",
      arbSubTitle:
        "ادفع بأمان باستخدام بطاقة الائتمان أو بطاقة الخصم الخاصة بك",
      isAvailable: false,
    },
    {
      src: paypal,
      title: "PayPal",
      arbTitle: "باي بال",
      subTitle: "Pay With Your PayPal Account",
      arbSubTitle: "ادفع باستخدام حساب PayPal الخاص بك",
      isAvailable: false,
    },
  ];
  return (
    <>
      <div className={formContainerClass}>
        <FormHeader
          icon={creditCard}
          title={"Payment Method"}
          arbTitle={`طريقة الدفع`}
          subTtile={"Choose Your Preferred Payment Method"}
          arbSubTtile={`اختر طريقة الدفع المفضلة لديك`}
        />

        <div className={paymentMethodsConatinerClass}>
          {methods.map((method, index) => (
            <Method method={method} key={index} />
          ))}
        </div>
        <div
          className={`${btnContainerClass} ${!dark && NightBtnContainerClass}`}
        >
          <div
            onClick={() => {
              // setorderFormFields();
              setSelectedStage(orderStages[0]);
            }}
          >
            <div>
              <i className="fa-solid fa-arrow-left"></i>
            </div>
            <div>
              {lang === "arb" ? "العودة إلى قسم الشحن" : "Back To Shipping"}
            </div>
          </div>
          <div
            onClick={() => {
              console.log(orderFormFields);
              console.log(orderFormFields[7].flag);
              console.log("x");
              if (!orderFormFields[7].flag) {
                setSelectedStage(orderStages[2]);
              }
            }}
          >
            <div>{lang === "arb" ? "تابع المراجعة" : "Continue To Review"}</div>
            <div>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PaymentMethod;
