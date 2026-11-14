// Import Style
import {
  featureContainerClass,
  categoryIconClass,
  categoryNameClass,
  categoryCountClass,
  darkFeatureContainerClass,
} from "./featuredCategories.module.css";

// Import Hooks
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

// Import Motion
import { motion } from "motion/react";
function Feature({ category, index }) {
  const { dark, lang } = useContext(AuthContext);

  return (
    <>
      <motion.div
        className={`${featureContainerClass}  ${dark ? darkFeatureContainerClass : ""}`}
        key={index}
        whileHover={{ y: -20 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4 }}
      >
        <div className={`${category.icon} ${categoryIconClass}`}></div>
        <div>
          <div className={categoryNameClass}>
            {lang === "arb" ? category.nameAr : category.name}
          </div>
          <div className={categoryCountClass}>
            {category.productsCount}+ {lang === "arb" ? "منتج" : "Products"}
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Feature;
