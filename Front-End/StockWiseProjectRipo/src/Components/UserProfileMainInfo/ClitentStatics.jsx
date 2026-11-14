// Import Style
import {
  ClitentStaticsContainerClass,
  staticClass,
} from "./UserProfileMainInfo.module.css";

// Import Motion
import { motion } from "motion/react";

// Import Hooks
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function ClitentStatics() {
  const { lang, dark } = useContext(AuthContext);
  const statics = [
    {
      logo: <i className="fa-solid fa-bag-shopping"></i>,
      color: "#007BFF",
      bgColor: "#EAF3FF",
      count: 12,
      label: "Total Orders",
      arbLabel: "عدد الطلبات",
    },
    {
      logo: <i className="fa-solid fa-heart"></i>,
      color: "#FF4D67",
      bgColor: "#FDEAF0",
      count: 12,
      label: "Favorite Products",
      arbLabel: "ألمنتجات المفضلة",
    },
    {
      logo: <i className="fa-solid fa-star"></i>,
      color: "#16A34A",
      bgColor: "#E7F8EE",
      count: 12,
      label: "Reviews",
      arbLabel: "عدد التعليقات",
    },
  ];
  return (
    <>
      <motion.div
        className={ClitentStaticsContainerClass}
        initial={{ opacity: 0, y: -170 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4 }}
      >
        {statics.map((item, index) => (
          <div
            className={staticClass}
            style={{ background: item.bgColor, color: item.color }}
            key={index}
          >
            <div style={{ background: item.bgColor, color: item.color }}>
              {item.logo}
            </div>
            <div>
              <div>{item.count}</div>
              <div>{lang === "arb" ? item.arbLabel : item.label}</div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
}

export default ClitentStatics;
