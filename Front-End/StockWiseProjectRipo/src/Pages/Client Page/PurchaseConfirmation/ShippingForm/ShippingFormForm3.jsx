// import Style
import {
  subFormClass,
  DeliveryOptionContainerClass,
  optionClass,
  DeliveryTimeContainerClass,
  DeliveryOptionsContainerClass,
  activeOptionClass,
  ContinueBtnClass,
  darkSubFormClass,
} from "./ShippingForm.module.css";

// Import Hooks
import { useState, useContext } from "react";
import { AuthContext } from "../../../../context/AuthContext";

// Import Component
import FormHeader from "../FormHeader";

// Import Icon Image
import truck from "../../../../Images/Icon/truck.png";
import dollar from "../../../../Images/Icon/dollar.png";
import lock from "../../../../Images/Icon/lock.png";
import Icon from "../../../../Components/Icon/Icon";

function ShippingFormForm3({ selectedStage, setSelectedStage }) {
  const { lang, orderStages } = useContext(AuthContext);

  return (
    <>
      <div className={`${subFormClass} ${darkSubFormClass}`}>
        <FormHeader
          icon={truck}
          title={"Delivery Option"}
          subTtile={"Choose How You Want To Receive Your Order"}
          arbTitle={"خيار التوصيل"}
          arbSubTtile={"اختر الطريقة التي ترغب في استلام طلبك بها"}
        />

        <div className={DeliveryOptionsContainerClass}>
          <div
            className={`${activeOptionClass} ${DeliveryOptionContainerClass}`}
          >
            <div className={optionClass}>
              <Icon iconSrc={truck} />
              <div className={DeliveryTimeContainerClass}>
                <div>
                  {lang === "arb" ? "التوصيل العادي" : "Standered Delivery"}
                </div>
                <div>
                  {lang === "arb"
                    ? "يستغرق التوصيل من يومين الى اربع أيام"
                    : "2-4 Business Days"}
                </div>
              </div>
            </div>
            <div className={optionClass}></div>
          </div>

          <div className={DeliveryOptionContainerClass}>
            <div className={optionClass}>
              <Icon iconSrc={dollar} />
              <div className={DeliveryTimeContainerClass}>
                <div>
                  {lang === "arb" ? "الدفع عند الاستلام" : "Cash On Delivery"}
                </div>
                <div>
                  {lang === "arb"
                    ? "يستغرق التوصيل من يومين الى اربع أيام"
                    : "2-4 Business Days"}
                </div>
              </div>
            </div>
            <div className={optionClass}></div>
          </div>
        </div>
        <div
          className={ContinueBtnClass}
          onClick={() => {
            setSelectedStage(orderStages[1]);
          }}
        >
          <Icon iconSrc={lock} />
          <div>
            {lang === "arb" ? "متابعة عملية الدفع" : "Continue To Payment"}
          </div>
          <div>
            <i className="fa-solid fa-arrow-right"></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShippingFormForm3;
