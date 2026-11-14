import {
  productDiscountClass,
  newPriceClass,
  oldPriceClass,
  discountValueClass,
} from "./ProductDetails.module.css";

// Import Hooks
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function ProductDiscount({ productData }) {
  const { lang } = useContext(AuthContext);

  function calcNewPrice(oldPrice, disCount) {
    const newPrice = oldPrice - oldPrice * (disCount / 100);
    return newPrice;
  }

  return (
    <>
      <div className={productDiscountClass}>
        <div>
          <div className={newPriceClass}>
            {Math.ceil(
              calcNewPrice(productData.price, productData.discountValue),
            )}
            $
          </div>
          <div className={oldPriceClass}>{productData.price}$</div>
          <div className={discountValueClass}>
            <span>{lang === "arb" ? "خصم" : "Discount:"} </span>
            <span>{productData.discountValue}%</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDiscount;
