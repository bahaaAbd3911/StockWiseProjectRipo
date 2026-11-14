// Import Style
import {
  HeaderContainerClass,
  logoContainerClass,
  contentContainerClass,
  imageContainerClass,
  arbHeaderContainerClass,
  darkHeaderContainerClass,
} from "./Header.module.css";

// Import Hooks
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

// Import Motion
import { motion } from "motion/react";

function Header({ icon, title, subTitle, arbTitle, arbSubTitle, img }) {
  const { dark, lang } = useContext(AuthContext);

  return (
    <>
      <motion.div
        className={`${HeaderContainerClass} ${lang == "arb" ? arbHeaderContainerClass : ""} ${dark ? darkHeaderContainerClass : ""}`}
        initial={{ opacity: 0, y: -170 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4 }}
      >
        <div className={logoContainerClass}>
          <i className={icon}></i>
        </div>
        <div className={contentContainerClass}>
          <h1>{lang === "arb" ? arbTitle : title}</h1>
          <p>{lang === "arb" ? arbSubTitle : subTitle}</p>
        </div>
        <div className={imageContainerClass}>
          <img src={img} />
        </div>
      </motion.div>
    </>
  );
}

export default Header;
