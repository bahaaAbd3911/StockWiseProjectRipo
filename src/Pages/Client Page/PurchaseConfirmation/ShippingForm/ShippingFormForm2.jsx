// import Style
import {
  subFormClass,
  FormInputContainerClass,
  formInputsContainerClass,
  listContainerClass,
  choosenItemClass,
  darkSubFormClass,
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
  const { dark, lang } = useContext(AuthContext);

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
              className={choosenItemClass}
              onClick={() => {
                setOpenCities((prev) => !prev);
              }}
            >
              <div>{lang === "arb" ? "اختر المدينة" : "Choose City"}</div>
              <div>
                {openAreas && <i className="fa-solid fa-angle-up"></i>}
                {!openAreas && <i className="fa-solid fa-chevron-down"></i>}
              </div>
            </div>
            {openCities && (
              <div className={listContainerClass}>
                {jordanianCities.map((city, index) => (
                  <div key={index}>
                    {lang === "arb" ? city.arbCityName : city.cityName}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className={FormInputContainerClass}>
            <div>
              <label>{lang === "arb" ? "المنطقة" : "Area"}</label>
              <span>*</span>
            </div>
            <div
              className={choosenItemClass}
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
                  <div key={index}>
                    {lang === "arb" ? area.arbAreaName : area.areaName}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className={FormInputContainerClass}>
            <div>
              <label>
                {lang === "arb" ? "تفاصيل الموقع" : "Address Details"}
              </label>
              <span>*</span>
            </div>
            <div>
              <span>
                <i className="fa-solid fa-at"></i>
              </span>
              <input
                placeholder={
                  lang === "arb"
                    ? "أدخل تفاصيل الموقع لنتمكن من الوصول اليك"
                    : "Enter Your Address Details"
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShippingFormForm2;
