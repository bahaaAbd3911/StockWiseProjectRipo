// Import Style
import {
  productHedingContainerClassClass,
  productTitleClass,
  productCategoryClass,
  productRateClass,
} from "./ProductDetails.module.css";

// Import Hooks
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function ProductHeading({ productData }) {
  const { lang } = useContext(AuthContext);
  return (
    <>
      <div className={productHedingContainerClassClass}>
        <div className={productTitleClass}>
          {lang === "arb" ? productData.nameAr : productData.name}
        </div>
        <div className={productCategoryClass}>
          <div>
            {lang === "arb" ? productData.categoryAr : productData.category}
          </div>
          <div className={productData.icon}></div>
        </div>
        <div className={productRateClass}>
          <span>{lang === "arb" ? "التقييم" : "Rating: "} </span>
          <span>{productData.rating}</span>
          <span>
            <i className="fa-solid fa-star"></i>
          </span>
        </div>
      </div>
    </>
  );
}

export default ProductHeading;
