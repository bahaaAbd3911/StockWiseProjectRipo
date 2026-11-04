// Import Style
import { featureContainerClass, darkFeatureClass } from "./features.module.css";

// Import Hooks
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

// Import Motion
import { motion } from "motion/react";

function Feature({ feture, index }) {
  const { dark, lang } = useContext(AuthContext);

  return (
    <>
      <motion.div
        className={`${featureContainerClass} ${dark ? darkFeatureClass : ""}`}
        key={index}
        whileHover={{ y: -15 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4 }}
      >
        <div>
          <i className={feture.icon}></i>
        </div>
        <div>
          <div>{lang === "arb" ? feture.arbName : feture.name}</div>
          <span>{lang === "arb" ? feture.arbComment : feture.comment}</span>
        </div>
      </motion.div>
    </>
  );
}

export default Feature;
