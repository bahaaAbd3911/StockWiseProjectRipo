// Import Style
import { orderedProductCountClass } from "./ProductDetails.module.css";

// Import Hooks
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function OrderedProduct({ productData }) {
  const [count, setCount] = useState(0);
  const { dark, lang, products, setMessage } = useContext(AuthContext);

  return (
    <>
      <div className={orderedProductCountClass}>
        <div
          onClick={() => {
            if (count === 0) {
              setMessage((prev) => ({
                ...prev,
                isShow: true,
                msgTxt: "You cannot reserve fewer than zero products.",
                arbMsgTxt: "لا يمكن ان تحجز اقل من صفر منتج",
                msgBGColor: "#EF4444",
                time: 3000,
                reminder: false,
              }));
            } else {
              setCount((prev) => prev - 1);
            }
          }}
        >
          -
        </div>
        <div>{count}</div>
        <div
          onClick={() => {
            if (count === productData.count) {
              setMessage((prev) => ({
                ...prev,
                isShow: true,
                msgTxt: "There Are No More Of This Product.",
                arbMsgTxt: "لا يوجد المزيد من هذا المنتج",
                msgBGColor: "#EF4444",
                time: 3000,
                reminder: true,
              }));
            } else {
              setCount((prev) => prev + 1);
            }
          }}
        >
          +
        </div>
      </div>
    </>
  );
}

export default OrderedProduct;
