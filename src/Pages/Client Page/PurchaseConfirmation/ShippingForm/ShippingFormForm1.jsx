// import Style
import {
  subFormClass,
  FormInputContainerClass,
  formInputsContainerClass,
  darkSubFormClass,
  errorMsgClass,
  beforeLastClass,
} from "./ShippingForm.module.css";

// Import Component
import FormHeader from "../FormHeader";

// Import Icon Image
import user from "../../../../Images/Icon/user.png";

// Import Hooks
import { useContext } from "react";
import { AuthContext } from "../../../../context/AuthContext";

function ShippingFormForm1() {
  const { dark, lang, orderFormFields, setorderFormFields } =
    useContext(AuthContext);

  return (
    <>
      <div className={`${subFormClass} ${darkSubFormClass}`}>
        <FormHeader
          icon={user}
          title={"Contact Information"}
          arbTitle={"معلومات الاتصال"}
          subTtile={
            "We'll Use This Information To Send You Order Updates And Delivery Details."
          }
          arbSubTtile={`سنستخدم هذه المعلومات لإرسال تحديثات الطلب وتفاصيل التسليم إليك.`}
        />

        <div className={formInputsContainerClass}>
          <div className={FormInputContainerClass}>
            <div>
              <label>{lang === "arb" ? "الاسم الكامل" : "Full Name"}</label>
              <span>*</span>
            </div>
            <div className={beforeLastClass}>
              <span>
                <i className="fa-solid fa-user"></i>
              </span>
              <input
                onChange={(e) => {
                  setorderFormFields((prev) => {
                    let updated = [...prev];
                    updated[0].data = e.target.value;
                    updated[0].flag = false;
                    updated[0].errorMsg = "";
                    updated[0].arbErrorMsg = "";
                    return updated;
                  });
                }}
                placeholder={
                  lang === "arb" ? `أدخل اسمك الكامل` : "Enter Your Full Name"
                }
                value={orderFormFields[0].data}
              />
            </div>
            <span className={errorMsgClass}>
              {lang === "arb"
                ? orderFormFields[0].arbErrorMsg
                : orderFormFields[0].errorMsg}
            </span>
          </div>

          <div className={FormInputContainerClass}>
            <div>
              <label>{lang === "arb" ? "رقم الهاتف" : "Phone Number"}</label>
              <span>*</span>
            </div>
            <div className={beforeLastClass}>
              <span>
                <i className="fa-solid fa-phone"></i>
              </span>
              <input
                value={orderFormFields[1].data}
                onChange={(e) => {
                  setorderFormFields((prev) => {
                    let updated = [...prev];
                    updated[1].data = e.target.value;
                    updated[1].flag = false;
                    updated[1].errorMsg = "";
                    updated[1].arbErrorMsg = "";
                    return updated;
                  });
                }}
                placeholder={
                  lang === "arb"
                    ? `أدخل رقمك لنقوم بتوصيلك`
                    : "Enter Your Number To Let Us Connect You"
                }
              />
            </div>
            <span className={errorMsgClass}>
              {lang === "arb"
                ? orderFormFields[1].arbErrorMsg
                : orderFormFields[1].errorMsg}
            </span>
          </div>

          <div className={FormInputContainerClass}>
            <div>
              <label>
                {lang === "arb" ? `البريد الالكتروني` : "Email Address"}
              </label>
              <span>*</span>
            </div>
            <div className={beforeLastClass}>
              <span>
                <i className="fa-solid fa-at"></i>
              </span>
              <input
                value={orderFormFields[2].data}
                placeholder={"you@example.com"}
                onChange={(e) => {
                  setorderFormFields((prev) => {
                    let updated = [...prev];
                    updated[2].data = e.target.value;
                    updated[2].flag = false;
                    updated[2].errorMsg = "";
                    updated[2].arbErrorMsg = "";
                    return updated;
                  });
                }}
              />
            </div>
            <span className={errorMsgClass}>
              {lang === "arb"
                ? orderFormFields[2].arbErrorMsg
                : orderFormFields[2].errorMsg}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShippingFormForm1;
