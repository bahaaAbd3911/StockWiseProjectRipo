// Import Style
import { pre } from "motion/react-client";
import {
  UserOrdersFilterContainerClass,
  filterContainer,
  activeFilterContainer,
} from "./ClientOrdersPage.module.css";

// Import Hooks
import { useState, useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";

function UserOrdersFilter({ filters, setFilters }) {
  const { dark, lang, setSearchFilters, userList, setUserList } =
    useContext(AuthContext);

  return (
    <>
      <div className={UserOrdersFilterContainerClass}>
        {filters.map((filter, index) => (
          <div
            className={`${filterContainer} ${filter.isActive && activeFilterContainer}`}
            key={index}
            onClick={() => {
              setFilters((prev) =>
                prev.map((item) => ({
                  ...item,
                  isActive: item.name === filter.name ? true : false,
                })),
              );
            }}
          >
            <div>{filter.icon}</div>
            <div>{lang === "arb" ? filter.arbName : filter.name}</div>
            <div>{filter.count}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default UserOrdersFilter;
