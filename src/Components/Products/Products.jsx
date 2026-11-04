import { useMemo, useState, useContext } from "react";

// Import Style
import {
  ProductsContainerClass,
  noProductsMatchingClass,
} from "./Products.module.css";

// Import Components
import Item from "../Items/Item";
import EmptyMessage from "../EmptyMessage/EmptyMessage";

// Import Motion
import { motion } from "motion/react";

// Import Context
import { AuthContext } from "../../context/AuthContext";

// Import Images
import cartLogo from "../../Images/ShoppingCart/cartLogo.png";
import favoriteLogo from "../../Images/Favorites/favoriteLogo.png";

function Products({ productsProp, status, state }) {
  const { searchFilters } = useContext(AuthContext);

  const [products] = useState(productsProp);

  // Filter products using AuthContext
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const {
        productName,
        productCategoty,
        productPrice,
        productRate,
        isStock,
      } = searchFilters;

      // Filter by product name
      const matchesName = product.name
        .toLowerCase()
        .includes((productName || "").trim().toLowerCase());

      // Filter by category
      const matchesCategory =
        !productCategoty || product.category === productCategoty;

      // // Filter by price range
      const matchesPrice =
        !Array.isArray(productPrice) ||
        productPrice.length !== 2 ||
        (product.price >= Number(productPrice[0]) &&
          product.price <= Number(productPrice[1]));

      // Filter by minimum rating
      const matchesRating =
        !productRate || Math.round(product.rating) == Math.round(productRate);

      // Filter by stock availability
      const matchesStock = !isStock || !product.outOfStock;

      return (
        matchesName &&
        matchesCategory &&
        matchesPrice &&
        matchesRating &&
        matchesStock
      );
    });
  }, [products, searchFilters]);

  return (
    <>
      {filteredProducts.length ? (
        <motion.div
          className={ProductsContainerClass}
          initial={{ opacity: 0, y: -170 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
        >
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Item
                product={product}
                value={1}
                key={product.id}
                status={status}
                state={state}
              />
            ))
          ) : (
            <p className={noProductsMatchingClass}>
              No products found matching your filters.
            </p>
          )}
        </motion.div>
      ) : status === "cart" ? (
        <EmptyMessage
          img={cartLogo}
          title={"Your Cart Is Feel Empty?"}
          arbTitle={"يبدو أن سلة تسوقك فارغة"}
          subTitle={`Looks Like You Haven't Added Any Products Yet. Explore Our Amazing
            Collection And Find Sometimes You'll Love!`}
          arbSubTitle={`يبدو أنك لم تُضِف أي منتجات بعد. استكشف مجموعتنا الرائعة واكتشف منتجات ستُعجبك حتماً!`}
        />
      ) : status === "favorite" ? (
        <EmptyMessage
          img={favoriteLogo}
          title={"Your Cart Is Feel Empty?"}
          arbTitle={"يبدو أن سلة تسوقك فارغة"}
          subTitle={`Looks Like You Haven't Added Any Products Yet. Explore Our Amazing
            Collection And Find Sometimes You'll Love!`}
          arbSubTitle={`يبدو أنك لم تُضِف أي منتجات بعد. استكشف مجموعتنا الرائعة واكتشف منتجات ستُعجبك حتماً!`}
        />
      ) : (
        ""
      )}
    </>
  );
}

export default Products;
