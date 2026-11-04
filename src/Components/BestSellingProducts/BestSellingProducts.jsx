// Import Style
import {
  BestSellingProductsContainerClass,
  itemsListContainerClass,
  arbItemsListContainerClass,
} from "./BestSellingProducts.module.css";

// Import Components
import ComponentHeader from "../ComponentHeader/ComponentHeader";
import Item from "../Items/Item";

// Import Hooks
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

// Import Motion
import { motion } from "motion/react";

function BestSellingProducts() {
  const { dark, lang } = useContext(AuthContext);

  const bestSellingProducts = [
    {
      id: 1,
      name: "Wireless Headphones",
      nameAr: "سماعات لاسلكية",
      price: 79.99,
      rating: 4.8,
      reviewsCount: 124,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
      category: "Electronics",
      categoryAr: "الإلكترونيات",
      isBestSeller: true,
    },
    {
      id: 2,
      name: "Smart Watch",
      nameAr: "ساعة ذكية",
      price: 149.99,
      rating: 4.7,
      reviewsCount: 98,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
      category: "Electronics",
      categoryAr: "الإلكترونيات",
      isBestSeller: true,
    },
    {
      id: 3,
      name: "Backpack",
      nameAr: "حقيبة ظهر",
      price: 49.99,
      rating: 4.6,
      reviewsCount: 76,
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80",
      category: "Fashion",
      categoryAr: "الأزياء",
      isBestSeller: true,
    },
    {
      id: 4,
      name: "Air Fryer",
      nameAr: "قلاية هوائية",
      price: 80.99,
      rating: 4.8,
      reviewsCount: 52,
      image: "../../Images/AirFrier.jpg",
      category: "Home & Living",
      categoryAr: "المنزل والمعيشة",
      isBestSeller: true,
    },
  ];
  return (
    <>
      <motion.div
        className={BestSellingProductsContainerClass}
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4 }}
      >
        <ComponentHeader
          title={"Best Selling Products"}
          arbicTitle={"الأكثر مبيعا"}
        />
        <div
          className={`${itemsListContainerClass}  ${lang === "arb" ? arbItemsListContainerClass : ""}`}
        >
          {bestSellingProducts.map((product, index) => (
            <Item product={product} key={index} state={"Add"} />
          ))}
        </div>
      </motion.div>
    </>
  );
}

export default BestSellingProducts;
