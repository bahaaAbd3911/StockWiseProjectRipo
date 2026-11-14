// Import Style
import {
  stockCaseClass,
  outOfStockClass,
  notOutOfStockClass,
} from "./ProductDetails.module.css";

// Import Hooks
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function StockCase({ productData }) {
  const { lang } = useContext(AuthContext);
  return (
    <>
      <div className={stockCaseClass}>
        {productData.outOfStock && (
          <div className={outOfStockClass}>
            <div>
              <i className="fa-solid fa-x"></i>
            </div>
            <div>{lang === "arb" ? "نفذت الكمية" : "Out Of Stock"}</div>
          </div>
        )}
        {!productData.outOfStock && (
          <div className={notOutOfStockClass}>
            <div>
              <i className="fa-solid fa-circle-check"></i>
            </div>
            <div>{lang === "arb" ? "متوفر" : "Available"}</div>
          </div>
        )}
      </div>
    </>
  );
}

export default StockCase;
