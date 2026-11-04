// Import Style
import {
  ProductDetailsContainerClass,
  arbProductDetailsContainerClass,
  productDataContainerClass,
  productDataContainerClassX,
  darkProductDetailsContainerClass,
} from "./ProductDetails.module.css";

// Import Hooks
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";

// Import Motion
import { motion } from "motion/react";

// Import Components
import ImagesContainer from "./ImagesContainer";
import StockCase from "./StockCase";
import ProductHeading from "./ProductHeading";
import ProductDiscount from "./ProductDiscount";
import ProductDescription from "./ProductDescription";
import OrderedProduct from "./OrderedProduct";
import ChooseProductColor from "./ChooseProductColor";
import ProductButtons from "./ProductButtons";

function ProductDetails({ productID }) {
  const { dark, lang, products } = useContext(AuthContext);

  const productData = products.find((product) => product.id == productID);

  const [activeImage, setActicveImage] = useState(productData.images[0] || 0);
  useEffect(() => {
    async function changeImage() {
      setActicveImage(productData.images[0] || 0);
    }
    changeImage();
  }, [productID]);
  return (
    <>
      <motion.div
        className={`${ProductDetailsContainerClass} ${lang === "arb" && arbProductDetailsContainerClass} ${dark && darkProductDetailsContainerClass}`}
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <ImagesContainer
          productData={productData}
          setActicveImage={setActicveImage}
          activeImage={activeImage}
        />
        <div className={productDataContainerClass}>
          <StockCase productData={productData} />
          <div className={productDataContainerClassX}>
            <ProductHeading productData={productData} />
            <ProductDiscount productData={productData} />
            <ProductDescription productData={productData} />
            <OrderedProduct productData={productData} />
            <ChooseProductColor productData={productData} />
            <ProductButtons />
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default ProductDetails;
