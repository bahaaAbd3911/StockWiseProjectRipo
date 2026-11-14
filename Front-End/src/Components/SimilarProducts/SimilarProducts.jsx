// Import Style
import {
  SimilarProductsContainerClass,
  arbSimilarProductsContainerClass,
  darkSimilarProductsContainerClass,
} from "./SimilarProducts.module.css";

// Import Hooks
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

// Import Components
import Products from "../Products/Products";

function SimilarProducts({ productID }) {
  const { products, lang, dark } = useContext(AuthContext);

  const productData = products.find((product) => product.id == productID);
  const choosenProduct = productData;

  const filteredProducts = products.filter(
    (product) =>
      product.category === choosenProduct.category &&
      product.id != choosenProduct.id,
  );
  const [similarProducts, setSimilarProducts] = useState([...filteredProducts]);

  return (
    <>
      <div
        className={`${SimilarProductsContainerClass} ${lang === "arb" ? arbSimilarProductsContainerClass : ""} ${dark && darkSimilarProductsContainerClass}`}
      >
        <h1>{lang === "arb" ? "منتجات مشابهة" : "Similar Products"}</h1>
        <Products productsProp={similarProducts} status={"similarProducts"} />
      </div>
    </>
  );
}

export default SimilarProducts;
