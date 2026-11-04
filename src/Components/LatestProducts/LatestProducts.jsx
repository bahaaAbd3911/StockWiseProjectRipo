import {
  LatestProductsContainerClass,
  itemsListContainerClass,
  arbItemsListContainerClass,
  filterContainerClass,
  activeClass,
  arbFilterContainerClass,
  darkFilterContainerClass,
  hoveredClass,
} from "./LatestProducts.module.css";

// Import Components
import ComponentHeader from "../ComponentHeader/ComponentHeader";
import Item from "../Items/Item";

// Import Hooks
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

// Import Motion
import { motion } from "motion/react";

function LatestProducts() {
  const { dark, lang } = useContext(AuthContext);

  const latestProducts = [
    {
      id: 1,
      name: "Gaming Mouse",
      nameAr: "فأرة ألعاب",
      price: 39.99,
      rating: 4.6,
      reviewsCount: 48,
      image:
        "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=800&q=80",
      category: "Electronics",
      isNew: true,
    },
    {
      id: 2,
      name: "Bluetooth Speaker",
      nameAr: "مكبر صوت بلوتوث",
      price: 69.99,
      rating: 4.8,
      reviewsCount: 62,
      image:
        "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=800&q=80",
      category: "Electronics",
      isNew: true,
    },
    {
      id: 3,
      name: "Coffee Maker",
      nameAr: "آلة صنع القهوة",
      price: 89.99,
      rating: 4.7,
      reviewsCount: 41,
      image:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
      category: "Home & Living",
      isNew: true,
    },
    {
      id: 4,
      name: "LED Lamp",
      nameAr: "مصباح LED",
      price: 29.99,
      rating: 4.5,
      reviewsCount: 37,
      image:
        "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
      category: "Home & Living",
      isNew: true,
    },
  ];

  const [filters, setFilter] = useState([
    { name: "All", isActive: true },
    { name: "Electronics", isActive: false },
    { name: "Home And Living", isActive: false },
    { name: "Fashion", isActive: false },
    { name: "Beauty", isActive: false },
    { name: "Sports", isActive: false },
    { name: "Toys", isActive: false },
  ]);

  // Update the active filter
  const handleFilterClick = (selectedFilter) => {
    setFilter((prevFilters) =>
      prevFilters.map((filter) => ({
        ...filter,
        isActive: filter.name === selectedFilter,
      })),
    );
  };

  // Get the currently active filter
  const activeFilter = filters.find((filter) => filter.isActive)?.name;

  // Filter products according to the selected category
  const filteredProducts =
    activeFilter === "All"
      ? latestProducts
      : latestProducts.filter((product) => {
          const selectedCategory =
            activeFilter === "Home And Living" ? "Home & Living" : activeFilter;

          return product.category === selectedCategory;
        });

  return (
    <motion.div
      className={LatestProductsContainerClass}
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4 }}
    >
      <ComponentHeader title="Latest Products" arbicTitle="آخر المنتجات" />

      <div
        className={`${filterContainerClass} ${lang === "arb" && arbFilterContainerClass} ${dark && darkFilterContainerClass}`}
      >
        {filters.map((filter) => (
          <div
            key={filter.name}
            className={filter.isActive ? activeClass : hoveredClass}
            onClick={() => handleFilterClick(filter.name)}
          >
            {lang === "arb"
              ? filter.name === "All"
                ? "الكل"
                : filter.name === "Electronics"
                  ? "إلكترونيات"
                  : filter.name === "Home And Living"
                    ? "المنزل والمعيشة"
                    : filter.name === "Fashion"
                      ? "الأزياء"
                      : filter.name === "Beauty"
                        ? "الجمال"
                        : filter.name === "Sports"
                          ? "الرياضة"
                          : "الألعاب"
              : filter.name}
          </div>
        ))}
      </div>

      <div
        className={`${itemsListContainerClass} ${
          lang === "arb" ? arbItemsListContainerClass : ""
        }`}
      >
        {filteredProducts.map((product) => (
          <Item product={product} key={product.id} state={"Add"} />
        ))}
      </div>
    </motion.div>
  );
}

export default LatestProducts;
