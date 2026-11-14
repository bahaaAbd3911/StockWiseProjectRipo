// Import Style
import {
  OrderSummeryContainerClass,
  darkOrderSummeryContainerClass,
  OrderSummeryHeadContainerClass,
  costsContainerClass,
  costClass,
  TotalClass,
  productsContainerClass,
  productClass,
  productImageClass,
  productInfoClass,
  productPriceAndCountClass,
  counterClass,
  checkBoxClass,
} from "./OrderSummery.module.css";

// Import Hooks
import { useState, useContext } from "react";
import { AuthContext } from "../../../../context/AuthContext";

// Import Images
import productImage from "../../../../Images/AirFrier.jpg";

// Import Components
import Icon from "../../../../Components/Icon/Icon";

function OrderSummery() {
  const { lang, dark } = useContext(AuthContext);

  const [count, setCount] = useState(1);
  return (
    <>
      <div
        className={`${OrderSummeryContainerClass} ${dark && darkOrderSummeryContainerClass}`}
      >
        <div className={OrderSummeryHeadContainerClass}>
          <div>
            <div>
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
            <div>{lang === "arb" ? "ملخص الطلب" : "Order Summary"}</div>
          </div>
          <div>{lang === "arb" ? "عناصر 5" : "(Count) Items"}</div>
        </div>
        <div className={productsContainerClass}>
          <div className={productClass}>
            <div>
              <div className={productImageClass}>
                <img src={productImage} />
              </div>
              <div className={productInfoClass}>
                <div>{lang === "arb" ? "اسم المنتج" : "Product Name"}</div>
                <div>{lang === "arb" ? "لون المنتج" : "Product Color"}</div>
                <div>{lang === "arb" ? "سعر المنتج" : "Product Price"}</div>
              </div>
            </div>
            <div className={productPriceAndCountClass}>
              <div className={counterClass}>
                <div onClick={() => setCount(count > 1 ? count - 1 : 1)}>-</div>
                <div>{count}</div>
                <div onClick={() => setCount(count + 1)}>+</div>
              </div>
              <div className={checkBoxClass}>
                <i className="fa-solid fa-check"></i>
              </div>
            </div>
          </div>
        </div>
        <div className={costsContainerClass}>
          <div className={costClass}>
            <div>{lang === "arb" ? "المجموع الفرعي" : "SubTotal"}</div>
            <div>120.00 JOD</div>
          </div>
          <div className={costClass}>
            <div>{lang === "arb" ? "رسوم الشحن" : "Shipping Fee"}</div>
            <div>3.00 JOD</div>
          </div>
        </div>
        <div className={TotalClass}>
          <div>{lang === "arb" ? "الإجمالي" : "Total"}</div>
          <div>123.00 JOD</div>
        </div>
      </div>
    </>
  );
}

export default OrderSummery;
