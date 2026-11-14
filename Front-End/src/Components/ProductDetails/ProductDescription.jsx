// Import Style
import { productDescClass } from "./ProductDetails.module.css";

// Import Hooks
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function ProductDescription({ productData }) {
  const { lang } = useContext(AuthContext);

  return (
    <>
      <div className={productDescClass}>
        {lang === "arb"
          ? productData.arabicDescription
          : productData.description}
      </div>
    </>
  );
}

export default ProductDescription;
