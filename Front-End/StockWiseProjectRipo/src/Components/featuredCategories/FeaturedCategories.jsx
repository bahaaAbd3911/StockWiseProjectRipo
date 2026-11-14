// Import Components
import Feature from "./Feature";

// Import Style
import {
  featuredCategoriesContainerClass,
  featuredCategoriesClass,
  viewAllButtonClass,
  featuredCategoriesHeadClass,
  arbFeaturedCategoriesHeadClass,
  arbViewAllButtonClass,
  darkFeaturedCategoriesContainerClass,
  arbFeaturedCategoriesClass,
} from "./featuredCategories.module.css";

// Import Hooks
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import ComponentHeader from "../ComponentHeader/ComponentHeader";

// Import Motion
import { motion } from "motion/react";

function FeaturedCategories() {
  const { dark, lang } = useContext(AuthContext);

  const featuredCategories = [
    {
      id: 1,
      name: "Electronics",
      nameAr: "الإلكترونيات",
      icon: "fa-solid fa-mobile",
      productsCount: 120,
    },
    {
      id: 2,
      name: "Home & Living",
      nameAr: "المنزل والمعيشة",
      icon: "fa-solid fa-house",
      productsCount: 85,
    },
    {
      id: 3,
      name: "Fashion",
      nameAr: "الأزياء",
      icon: "fa-solid fa-shirt",
      productsCount: 200,
    },
    {
      id: 4,
      name: "Beauty",
      nameAr: "الجمال",
      icon: "fa-solid fa-spray-can-sparkles",
      productsCount: 150,
    },
    {
      id: 5,
      name: "Sports",
      nameAr: "الرياضة",
      icon: "fa-solid fa-futbol",
      productsCount: 90,
    },
    {
      id: 6,
      name: "Toys",
      nameAr: "الألعاب",
      icon: "fa-brands fa-xbox",
      productsCount: 70,
    },
  ];
  return (
    <>
      <motion.div
        className={`${featuredCategoriesContainerClass} ${dark ? darkFeaturedCategoriesContainerClass : ""}`}
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4 }}
      >
        <ComponentHeader
          title={"Features Categories"}
          arbicTitle={"الفئات المميزة"}
        />
        <div
          className={`${featuredCategoriesClass}  ${lang === "arb" ? arbFeaturedCategoriesClass : ""}`}
        >
          {featuredCategories.map((category, index) => (
            <Feature category={category} index={index} key={index} />
          ))}
        </div>
      </motion.div>
    </>
  );
}

export default FeaturedCategories;
