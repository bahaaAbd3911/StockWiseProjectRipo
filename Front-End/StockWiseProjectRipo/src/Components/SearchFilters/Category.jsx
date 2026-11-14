// Import Style
import {
  categoryContaienrClass,
  categoryIconClass,
  categoryNameClass,
  categoryCountClass,
  iconAndNameContainerClass,
  selectedCategoryContaienrClass,
  darkCategoryContaienrClass,
} from "./SearchFilters.module.css";

// Import Hooks
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
function Category({ data, setCategories }) {
  const { dark, lang, searchFilters, setSearchFilters } =
    useContext(AuthContext);
  return (
    <>
      <div
        className={`${categoryContaienrClass} ${dark && darkCategoryContaienrClass} ${data.isSelected && selectedCategoryContaienrClass}`}
        onClick={() => {
          setCategories((prev) =>
            prev.map((category) => ({
              ...category,
              isSelected:
                category.name === data.name ? !category.isSelected : false,
            })),
          );
          setSearchFilters((prev) => ({
            ...prev,
            productCategoty: prev.productCategoty == data.name ? "" : data.name,
          }));
        }}
      >
        <div className={iconAndNameContainerClass}>
          <div className={`${categoryNameClass} ${data.icon}`}></div>
          <div className={categoryIconClass}>
            {lang === "arb" ? data.nameAr : data.name}
          </div>
        </div>

        <div className={categoryCountClass}>{data.productsCount}</div>
      </div>
    </>
  );
}

export default Category;
