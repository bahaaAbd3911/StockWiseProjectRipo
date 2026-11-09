// Import Style
import { formContainerClass } from "../ShippingForm/ShippingForm.module.css";
import {
  formClass,
  formContainersClass,
  formTitleAndIconConatinerClass,
  formDataClass,
  editBtnClass,
  btnContainerClass,
  NightBtnContainerClass,
  darkFormClass,
} from "./PlaceOrder.module.css";

// Import Image
import listIcon from "../../../../Images/Icon/checklist.png";
import locationIcon from "../../../../Images/Icon/location.png";
import creditIcon from "../../../../Images/Icon/contactless.png";
import boxIcon from "../../../../Images/Icon/box.png";

// Import Hooks
import { useState, useContext } from "react";
import { AuthContext } from "../../../../context/AuthContext";

// Import Component
import FormHeader from "../FormHeader";
import Icon from "../../../../Components/Icon/Icon";

import { submitOrderValidation } from "../../../../randomFunctions";

function PlaceOrder({ setSelectedStage, selectedStage }) {
  const {
    dark,
    lang,
    orderStages,
    setOrderStages,
    orderFormFields,
    setorderFormFields,
  } = useContext(AuthContext);

  return (
    <>
      <div className={formContainerClass}>
        <FormHeader
          icon={listIcon}
          title={"Payment Method"}
          arbTitle={`طريقة الدفع`}
          subTtile={"Choose Your Preferred Payment Method"}
          arbSubTtile={`اختر طريقة الدفع المفضلة لديك`}
        />
        <div className={formContainersClass}>
          <div className={`${formClass} ${dark && darkFormClass}`}>
            <div>
              <div className={formTitleAndIconConatinerClass}>
                <Icon iconSrc={locationIcon} />
                <div>
                  {lang === "arb" ? "معلومات الشحن" : "Shipping Information"}
                </div>
              </div>
              <div className={formDataClass}>
                <div>
                  {lang === "arb" ? "اسم المستخدم" : "User Name: "}
                  {orderFormFields[0].data}
                </div>
                <div>
                  {lang === "arb" ? "رقم هاتف المستخدم" : "User Phone Number: "}
                  {orderFormFields[1].data}
                </div>
                <div>
                  {lang === "arb" ? "الموقع" : "User Location: "}
                  {orderFormFields[2].data}
                </div>
              </div>
            </div>

            <div className={editBtnClass}>
              <button onClick={() => setSelectedStage(orderStages[0])}>
                <span>
                  <i className="fa-solid fa-pen"></i>
                </span>
                <span>{lang === "arb" ? "تعديل" : "Edit"}</span>
              </button>
            </div>
          </div>

          <div className={`${formClass} ${dark && darkFormClass}`}>
            <div>
              <div className={formTitleAndIconConatinerClass}>
                <Icon iconSrc={creditIcon} />
                <div>{lang === "arb" ? "طريقة الدفع" : "Payment Method"}</div>
              </div>

              <div className={formDataClass}>
                <div>Payment Method: {orderFormFields[7].data}</div>
                {/* <div>
                  {lang === "arb"
                    ? "ادفع عند استلام طلبك"
                    : "Pay When You Receive Your Order"}
                </div> */}
              </div>
            </div>
            <div className={editBtnClass}>
              <button onClick={() => setSelectedStage(orderStages[1])}>
                <span>
                  <i className="fa-solid fa-pen"></i>
                </span>
                <span>{lang === "arb" ? "تعديل" : "Edit"}</span>
              </button>
            </div>
          </div>

          <div className={`${formClass} ${dark && darkFormClass}`}>
            <div className={formTitleAndIconConatinerClass}>
              <Icon iconSrc={boxIcon} />
              <div>
                {lang === "arb" ? "عناصر الطلب (العدد)" : "Order Items (Count)"}
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${btnContainerClass} ${!dark && NightBtnContainerClass}`}
        >
          <div
            onClick={() => {
              setSelectedStage(orderStages[1]);
            }}
          >
            <div>
              <i className="fa-solid fa-arrow-left"></i>
            </div>
            <div>
              {lang === "arb" ? "العودة إلى قسم الدفع" : "Back To Payment"}
            </div>
          </div>

          <div
            onClick={() => {
              submitOrderValidation(orderFormFields, setorderFormFields);
              if (orderFormFields.some((field) => field.flag === true)) {
                if (
                  orderFormFields[0].flag ||
                  orderFormFields[1].flag ||
                  orderFormFields[2].flag ||
                  orderFormFields[3].flag ||
                  orderFormFields[5].flag ||
                  orderFormFields[6].flag
                ) {
                  setOrderStages((prev) => {
                    let updated = [...prev];
                    updated[0].alert = true;
                    return updated;
                  });
                } else {
                  setOrderStages((prev) => {
                    let updated = [...prev];
                    updated[0].alert = false;
                    return updated;
                  });
                }
                if (orderFormFields[7].flag) {
                  setOrderStages((prev) => {
                    let updated = [...prev];
                    updated[1].alert = true;
                    return updated;
                  });
                } else {
                  setOrderStages((prev) => {
                    let updated = [...prev];
                    updated[1].alert = false;
                    return updated;
                  });
                }
              } else {
                setOrderStages((prev) => {
                  let updated = [...prev];
                  updated[1].alert = false;
                  updated[0].alert = false;
                  return updated;
                });
                // Post To Database
              }
            }}
          >
            <div>
              {lang === "arb" ? "تأكيد الطلب (100$)" : "Place Order (100$)"}
            </div>
            <div>
              <i className="fa-solid fa-lock"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PlaceOrder;
