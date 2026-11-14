// Import Style
import {
  CommentsFilterContianerClass,
  activeFilterClass,
  darkCommentsFilterContianerClass,
} from "./CommentOnProducts.module.css";

// Import Hooks
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function CommentsFilter({
  calcCountForEachRate,
  productComments,
  filters,
  setFilter,
  setChoosenFilter,
}) {
  const { dark, lang } = useContext(AuthContext);

  return (
    <>
      <div
        className={`${CommentsFilterContianerClass} ${dark && darkCommentsFilterContianerClass}`}
      >
        {filters.map((filter, index) => (
          <div
            key={index}
            className={filter.isSelected ? activeFilterClass : ""}
            onClick={() => {
              setChoosenFilter(filter);
              setFilter((prev) =>
                prev.map((fil) => ({
                  ...fil,
                  isSelected: fil.name === filter.name,
                })),
              );
            }}
          >
            <div>{lang === "arb" ? filter.arbName : filter.name}</div>
            <div>({filter.count})</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default CommentsFilter;
