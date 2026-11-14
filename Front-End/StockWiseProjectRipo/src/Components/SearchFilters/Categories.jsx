// Import Components
import Category from "./Category";

// Import Style
import {
  categoriesContainerClass,
  filterContainerClass,
} from "./SearchFilters.module.css";

// Import Hooks
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function Categories() {
  const { lang, categories, setCategories } = useContext(AuthContext);

  return (
    <>
      <div className={`${filterContainerClass} `}>
        <h4>{lang === "arb" ? "الفئات" : "Categories"}</h4>
        <div className={categoriesContainerClass}>
          {categories.map((categoryData, index) => (
            <Category
              data={categoryData}
              key={index}
              setCategories={setCategories}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Categories;
