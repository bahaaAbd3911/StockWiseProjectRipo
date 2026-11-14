// import Style
import {
  subFormClass,
  FormInputContainerClass,
  formInputsContainerClass,
  darkSubFormClass,
} from "./ShippingForm.module.css";

// Import Component
import FormHeader from "../FormHeader";

// Import Icon Image
import user from "../../../../Images/Icon/user.png";

// Import Hooks
import { useContext } from "react";
import { AuthContext } from "../../../../context/AuthContext";

function ShippingFormForm1() {
  const { dark, lang } = useContext(AuthContext);

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
            <div>
              <span>
                <i className="fa-solid fa-user"></i>
              </span>
              <input
                placeholder={
                  lang === "arb" ? `أدخل اسمك الكامل` : "Enter Your Full Name"
                }
              />
            </div>
          </div>

          <div className={FormInputContainerClass}>
            <div>
              <label>{lang === "arb" ? "رقم الهاتف" : "Phone Number"}</label>
              <span>*</span>
            </div>
            <div>
              <span>
                <i className="fa-solid fa-phone"></i>
              </span>
              <input
                placeholder={
                  lang === "arb"
                    ? `أدخل رقمك لنقوم بتوصيلك`
                    : "Enter Your Number To Let Us Connect You"
                }
              />
            </div>
          </div>

          <div className={FormInputContainerClass}>
            <div>
              <label>
                {lang === "arb" ? `البريد الالكتروني` : "Email Address"}
              </label>
              <span>*</span>
            </div>
            <div>
              <span>
                <i className="fa-solid fa-at"></i>
              </span>
              <input placeholder={"you@example.com"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShippingFormForm1;
