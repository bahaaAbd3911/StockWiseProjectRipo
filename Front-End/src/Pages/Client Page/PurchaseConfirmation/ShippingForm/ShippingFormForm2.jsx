// import Style
import {
  subFormClass,
  FormInputContainerClass,
  formInputsContainerClass,
  listContainerClass,
  choosenItemClass,
  darkSubFormClass,
  errorMsgClass,
  beforeLastClass,
} from "./ShippingForm.module.css";

// Import Hooks
import { useState } from "react";

// Import Object
import { jordanianAreasList, jordanianCitiesList } from "../../../../objects";

// Import Component
import FormHeader from "../FormHeader";

// Import Icon Image
import location from "../../../../Images/Icon/location.png";

// Import Hooks
import { useContext } from "react";
import { AuthContext } from "../../../../context/AuthContext";

function ShippingFormForm2() {
  const { dark, lang, setorderFormFields, orderFormFields } =
    useContext(AuthContext);

  const [jordanianAreas, setJordanianAreas] = useState(jordanianAreasList);
  const [jordanianCities, setJordanianCities] = useState(jordanianCitiesList);
  const [openCities, setOpenCities] = useState(false);
  const [openAreas, setOpenAreas] = useState(false);
  return (
    <>
      <div className={`${subFormClass} ${darkSubFormClass}`}>
        <FormHeader
          icon={location}
          title={"Delivery Address"}
          subTtile={"Where Should Deliver Your Order"}
          arbTitle={"عنوان التسليم"}
          arbSubTtile={"أين يجب توصيل طلبك؟"}
        />

        <div className={formInputsContainerClass}>
          <div className={FormInputContainerClass}>
            <div>
              <label>{lang === "arb" ? "المدينة" : "City"}</label>
              <span>*</span>
            </div>
            <div
              className={`${choosenItemClass} ${beforeLastClass}`}
              onClick={() => {
                setOpenCities((prev) => !prev);
              }}
            >
              <div>
                {orderFormFields[3].data
                  ? orderFormFields[3].data
                  : lang === "arb"
                    ? "اختر المدينة"
                    : "Choose City"}
              </div>
              <div>
                {openAreas && <i className="fa-solid fa-angle-up"></i>}
                {!openAreas && <i className="fa-solid fa-chevron-down"></i>}
              </div>
            </div>
            {openCities && (
              <div className={listContainerClass}>
                {jordanianCities.map((city, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setorderFormFields((prev) => {
                        let updated = [...prev];
                        updated[3].data = city.cityName;
                        updated[3].flag = false;
                        updated[3].errorMsg = "";
                        updated[3].arbErrorMsg = "";
                        return updated;
                      });
                    }}
                  >
                    {lang === "arb" ? city.arbCityName : city.cityName}
                  </div>
                ))}
              </div>
            )}
            <span className={errorMsgClass}>
              {lang === "arb"
                ? orderFormFields[3].arbErrorMsg
                : orderFormFields[3].errorMsg}
            </span>
          </div>

          {/* <div className={FormInputContainerClass}>
            <div>
              <label>{lang === "arb" ? "المنطقة" : "Area"}</label>
              <span>*</span>
            </div>
            <div
              className={`${choosenItemClass} ${beforeLastClass}`}
              onClick={() => {
                setOpenAreas((prev) => !prev);
              }}
            >
              <div>{lang === "arb" ? "اختر المنطقة" : "Choose Area"}</div>
              <div>
                {openAreas && <i className="fa-solid fa-angle-up"></i>}
                {!openAreas && <i className="fa-solid fa-chevron-down"></i>}
              </div>
            </div>
            {openAreas && (
              <div className={listContainerClass}>
                {jordanianAreas.map((area, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setorderFormFields((prev) => {
                        let updated = [...prev];
                        updated[4].data = area.areaName;
                        updated[4].flag = false;
                        updated[4].errorMsg = "";
                        updated[4].arbErrorMsg = "";
                        return updated;
                      });
                    }}
                  >
                    {orderFormFields[4].data
                      ? orderFormFields[4].data
                      : lang === "arb"
                        ? area.arbAreaName
                        : area.areaName}
                  </div>
                ))}
              </div>
            )}
            <span className={errorMsgClass}>
              {lang === "arb"
                ? orderFormFields[4].arbErrorMsg
                : orderFormFields[4].errorMsg}
            </span>
          </div> */}

          <div className={FormInputContainerClass}>
            <div>
              <label>
                {lang === "arb" ? "تفاصيل الموقع" : "Address Details"}
              </label>
              <span>*</span>
            </div>
            <div className={`${beforeLastClass}`}>
              <span>
                <i className="fa-solid fa-at"></i>
              </span>
              <input
                value={orderFormFields[5].data}
                onChange={(e) => {
                  setorderFormFields((prev) => {
                    let updated = [...prev];
                    updated[5].data = e.target.value;
                    updated[5].flag = false;
                    updated[5].errorMsg = "";
                    updated[5].arbErrorMsg = "";
                    return updated;
                  });
                }}
                placeholder={
                  lang === "arb"
                    ? "أدخل تفاصيل الموقع لنتمكن من الوصول اليك"
                    : "Enter Your Address Details"
                }
              />
            </div>
            <span className={errorMsgClass}>
              {lang === "arb"
                ? orderFormFields[5].arbErrorMsg
                : orderFormFields[5].errorMsg}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShippingFormForm2;
