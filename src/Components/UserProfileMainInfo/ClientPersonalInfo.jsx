// Import Style
import {
  ClientPersonalInfoContianerClass,
  ClientPersonalInfoHeaderClass,
  ClientPersonalInfoDataClass,
  ClientPersonalInfoEditBtnClass,
  darkClientPersonalInfoContianerClass,
} from "./UserProfileMainInfo.module.css";

// Import Hooks
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function ClientPersonalInfo({ setOpen }) {
  const { lang, dark } = useContext(AuthContext);
  return (
    <>
      <div
        className={`${ClientPersonalInfoContianerClass} ${dark && darkClientPersonalInfoContianerClass}`}
      >
        <div className={ClientPersonalInfoHeaderClass}>
          <div>
            <i className="fa-solid fa-user"></i>
          </div>
          <div>
            {lang === "arb" ? "المعلومات الشخصية" : "Personal Information"}
          </div>
        </div>
        <div className={ClientPersonalInfoDataClass}>
          <div>
            <div>
              <div>
                <i className="fa-solid fa-user"></i>
              </div>
              <div>{lang === "arb" ? "الاسم الكامل" : "Full Name:"}</div>
            </div>
            <div>User Name</div>
          </div>

          <div>
            <div>
              <div>
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div>
                {lang === "arb" ? "البريد الإلكتروني" : "Email Address"}
              </div>
            </div>
            <div>User@gmail.com</div>
          </div>

          <div>
            <div>
              <div>
                <i className="fa-solid fa-phone"></i>
              </div>
              <div>{lang === "arb" ? "رقم الهاتف" : "Phone Number:"}</div>
            </div>
            <div>0770462578</div>
          </div>
        </div>
        <div
          className={ClientPersonalInfoEditBtnClass}
          onClick={() => {
            setOpen(true);
          }}
        >
          <div>
            <i className="fa-solid fa-pen"></i>
          </div>
          <div>{lang === "arb" ? "تعديل المعلومات" : "Edit Information"}</div>
        </div>
      </div>
    </>
  );
}

export default ClientPersonalInfo;
