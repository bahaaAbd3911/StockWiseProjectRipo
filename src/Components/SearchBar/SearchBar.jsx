// Import Style
import {
  SearchBarContainerClass,
  SearchBarLangIsArbContainerClass,
  inputContainerClass,
  cartAndFavoriteContainerClass,
  logoContainerClass,
  searchAndIconsContainerClass,
  logoDarkClass,
  cartAndFavoriteContainerDarkClass,
  profileBtnContainerClass,
  heartLoveClass,
  shoppingCartClass,
} from "./SearchBar.module.css";

// Import Hooks
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router";
// Import Motion
import { motion } from "motion/react";

// Import Images
import userImg from "../../Images/istockphoto-1170073824-612x612.jpg";

function SearchBar({ value }) {
  const { dark, lang, setSearchFilters, userList, setUserList } =
    useContext(AuthContext);
  let navigate = useNavigate();
  return (
    <>
      <motion.div
        className={`${SearchBarContainerClass} ${lang === "arb" ? SearchBarLangIsArbContainerClass : ""}`}
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <div
          className={logoContainerClass}
          onClick={() => {
            navigate("/client/home");
          }}
        >
          <div>
            <i className="fa-solid fa-basket-shopping"></i>
          </div>
          <div className={dark ? logoDarkClass : ""}>
            Stock<span>Wise</span>
          </div>
        </div>
        <div className={searchAndIconsContainerClass}>
          <div
            className={inputContainerClass}
            onClick={() => {
              if (!value) {
                navigate("/client/products");
              }
            }}
          >
            <input
              placeholder={
                lang === "eng"
                  ? "Search About Your Product"
                  : "أبحث عن المنتج الذي تريده"
              }
              onChange={(e) => {
                setSearchFilters((prev) => ({
                  ...prev,
                  productName: e.target.value,
                }));
              }}
            />
          </div>
          <div
            className={`${cartAndFavoriteContainerClass}  ${dark ? cartAndFavoriteContainerDarkClass : ""}`}
          >
            <div
              className={heartLoveClass}
              onClick={() => {
                navigate("/client/profile");
                setUserList((prev) => {
                  let updated = prev.map((item) => ({
                    ...item,
                    isActive: item.index === 3 ? true : false,
                  }));
                  return updated;
                });
              }}
            >
              <i className="fa-solid fa-heart"></i>
              <span>1</span>
            </div>
            <div
              className={shoppingCartClass}
              onClick={() => {
                navigate("/client/profile");
                setUserList((prev) => {
                  let updated = prev.map((item) => ({
                    ...item,
                    isActive: item.index === 2 ? true : false,
                  }));
                  return updated;
                });
              }}
            >
              <i className="fa-solid fa-cart-shopping"></i>
              <span>1</span>
            </div>
            <div
              className={profileBtnContainerClass}
              onClick={() => {
                navigate("/client/profile");
                setUserList((prev) => {
                  let updated = prev.map((itemX) => ({
                    ...itemX,
                    isActive: itemX.index === 0 ? true : false,
                  }));
                  return updated;
                });
              }}
            >
              <img src={userImg} />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default SearchBar;
