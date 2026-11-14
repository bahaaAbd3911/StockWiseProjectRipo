// Import Style
import {
  itemContainerClass,
  itemImgClass,
  itemNameClass,
  itemRatingClass,
  itemPriceClass,
  itemContnentContainerClass,
  favoBtnClass,
  darkItemContainerClass,
  outOfStockClass,
  priceAndStockStatusContainerClass,
} from "./Item.module.css";

// Import Hooks
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router";

// Import Motion
import { motion } from "motion/react";

function Item({ product, value, state }) {
  const { dark, lang, message, setMessage } = useContext(AuthContext);
  let navigate = useNavigate();

  return (
    <>
      <motion.div
        className={`${itemContainerClass} ${dark && darkItemContainerClass}`}
        whileHover={{ y: -15 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4 }}
      >
        <div
          className={itemImgClass}
          onClick={() => {
            navigate(`/client/ProductDetails/${product.id}`);
          }}
        >
          <img src={product.image} />
          <div
            className={favoBtnClass}
            onClick={() => {
              if (!value) {
                navigate("/client/products");
              } else {
                setMessage({
                  isShow: true,
                  msgTxt:
                    "Product Was Added Out To Your Favorite List Successfully",
                  arbMsgTxt: "تم إضافة هذا المنتج الى قائمتك المفضلة",
                  msgBGColor: "#10BBB1",
                  time: 3000,
                  reminder: false,
                });
              }
            }}
          >
            <i className="fa-regular fa-heart"></i>
            {/* <i className="fa-solid fa-heart"></i> */}
          </div>
        </div>
        <div className={itemContnentContainerClass}>
          <div className={itemNameClass}>
            {lang === "arb" ? product.nameAr : product.name}
          </div>
          <div className={itemRatingClass}>
            <span>{Math.round(product.rating)}</span>
            <span>
              <i className="fa-solid fa-star"></i>
            </span>
          </div>
          <div className={priceAndStockStatusContainerClass}>
            <div className={itemPriceClass}>{product.price} $</div>
            <div className={outOfStockClass}>
              {product.outOfStock && "Out Of Stock"}
            </div>
          </div>
          <button
            onClick={() => {
              if (!value) {
                navigate("/client/products");
              } else {
                if (product.outOfStock) {
                  setMessage({
                    isShow: true,
                    msgTxt: "This Product Is Out Of Stock",
                    arbMsgTxt: "نفذ هذا المنتج من المخزون",
                    msgBGColor: "#EF4444",
                    time: 5000,
                    reminder: true,
                  });
                } else {
                  setMessage({
                    isShow: true,
                    msgTxt: "Product Was Added Out To Your Cart Successfully",
                    arbMsgTxt: "تم اضافة المنتج الى سلة التسوق بنجاح",
                    msgBGColor: "#10BBB1",
                    time: 3000,
                    reminder: false,
                  });
                }
              }
            }}
          >
            {lang === "arb" && state === "Add" && "أضف للسلة"}
            {lang !== "arb" && state === "Add" && "Add To Cart"}
            {lang === "arb" && state === "Remove" && "حذف من السلة"}
            {lang !== "arb" && state === "Remove" && "Remove From Cart"}
          </button>
        </div>
      </motion.div>
    </>
  );
}

export default Item;
