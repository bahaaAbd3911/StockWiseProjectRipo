// Import Style
import {
  componentHeaderClass,
  arbComponentHeaderClass,
  viewAllButtonClass,
  arbViewAllButtonClass,
  darkComponentHeaderClass,
} from "./ComponentHeader.module.css";

// Import Hooks
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function ComponentHeader({ title, arbicTitle }) {
  const { dark, lang } = useContext(AuthContext);

  return (
    <>
      <div
        className={`${componentHeaderClass} ${lang === "arb" ? arbComponentHeaderClass : ""} ${dark ? darkComponentHeaderClass : ""}`}
      >
        <h2>{lang === "arb" ? arbicTitle : title}</h2>
        <div className={`${viewAllButtonClass} ${arbViewAllButtonClass}`}>
          <span>{lang === "arb" ? "عرض الكل" : "View All"}</span>
          <span>
            {lang === "arb" ? (
              <i className="fa-solid fa-arrow-left"></i>
            ) : (
              <i className="fa-solid fa-arrow-right"></i>
            )}
          </span>
        </div>
      </div>
    </>
  );
}

export default ComponentHeader;
