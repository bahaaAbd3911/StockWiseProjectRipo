// Import Style

import {
  filterClass,
  activeClass,
  hoveredClass,
  morningFilterClass,
} from "../../Pages/Client Page/FavoritePage/FavoritePage.module.css";

// Import Hooks
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

// Import Motion
import { motion } from "motion/react";

function Filter() {
  const { dark, lang, setSearchFilters } = useContext(AuthContext);
  const [filters, setFilter] = useState([
    { name: "All", label: "", isActive: true },
    { name: "Electronics", label: "Electronics", isActive: false },
    { name: "Home And Living", label: "Home And Living", isActive: false },
    { name: "Fashion", label: "Fashion", isActive: false },
    { name: "Beauty", label: "Beauty", isActive: false },
    { name: "Sports", label: "Sports", isActive: false },
    { name: "Toys", label: "Toys", isActive: false },
  ]);

  // Update the active filter
  const handleFilterClick = (selectedFilter) => {
    setFilter((prevFilters) =>
      prevFilters.map((filter) => ({
        ...filter,
        isActive: filter.name === selectedFilter,
      })),
    );
    setSearchFilters((prev) => ({ ...prev, productCategoty: selectedFilter }));
  };
  return (
    <>
      <motion.div
        className={`${filterClass} ${!dark ? morningFilterClass : ""}`}
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        {filters.map((filter) => (
          <div
            key={filter.name}
            className={filter.isActive ? activeClass : hoveredClass}
            onClick={() => handleFilterClick(filter.label)}
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
      </motion.div>
    </>
  );
}

export default Filter;
