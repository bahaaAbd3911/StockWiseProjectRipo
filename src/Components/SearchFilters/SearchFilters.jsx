// Import Components
import Categories from "./Categories";
import PriceRangeFilter from "./PriceRangeFilter";
import RatingFilter from "./RatingFilter";
// Import Style
import {
  SearchFiltersContainerClass,
  filtersContainerClass,
  checkBoxClass,
  inStockContainerClass,
  filterContainerClass,
  darkSearchFiltersContainerClass,
  arbSearchFiltersContainerClass,
  notCheckedCheckBoxClass,
} from "./SearchFilters.module.css";

// Import Hooks
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

// Import Motion
import { motion } from "motion/react";
function SearchFilters() {
  const { dark, lang, setSearchFilters, searchFilters } =
    useContext(AuthContext);

  return (
    <>
      <motion.div
        className={`${SearchFiltersContainerClass} ${dark && darkSearchFiltersContainerClass} ${lang === "arb" && arbSearchFiltersContainerClass}`}
        initial={{ opacity: 0, x: -140 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4 }}
      >
        <div className={filtersContainerClass}>
          <Categories />
          <PriceRangeFilter min={0} max={2000} />
          <RatingFilter />
          <div className={filterContainerClass}>
            <h4>In Stock</h4>
            <div className={inStockContainerClass}>
              <div
                className={`${searchFilters.isStock ? checkBoxClass : notCheckedCheckBoxClass}`}
                onClick={() => {
                  setSearchFilters((prev) => ({
                    ...prev,
                    isStock: !prev.isStock,
                  }));
                }}
              >
                {searchFilters.isStock && <i className="fa-solid fa-check"></i>}
              </div>
              <div>
                {lang === "arb"
                  ? "عرض المنتجات المتوفرة فقط"
                  : "Only Show In Stock"}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
export default SearchFilters;
