// Import Style
import {
  featuresContainerClass,
  featureContainerClass,
  darkFeatureClass,
  arbFeaturesContainerClass,
} from "./features.module.css";

// Import Hooks
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

// Import Motion
import { motion } from "motion/react";

// Import Component
import Feature from "./Feature";

function Features() {
  const { dark, lang } = useContext(AuthContext);

  const features = [
    {
      icon: "fa-solid fa-truck",
      name: "Free Shipping",
      arbName: "توصيل مجاني",
      comment: "On Orders Over $$0",
      arbComment: "لكل الطلبات",
    },

    {
      icon: "fa-regular fa-eye-slash",
      name: "Secure Payment",
      arbName: "دفع آمن",
      comment: "Cash On",
      arbComment: "عند الاستلام",
    },

    {
      icon: "fa-solid fa-clock-rotate-left",
      name: "Easy Return",
      arbName: "سهولة إرجاع الطلبات",
      comment: "Withen 7 Days",
      arbComment: "خلال سبع أيام",
    },

    {
      icon: "fa-solid fa-business-time",
      name: "24/7 Support",
      arbName: "متاحون على مدار الساعة",
      comment: "We Are Here To Help",
      arbComment: "جاهون للمساعدة",
    },
  ];
  return (
    <>
      <motion.div
        className={`${featuresContainerClass}   ${lang === "arb" ? arbFeaturesContainerClass : ""}`}
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4 }}
      >
        {features.map((feture, index) => (
          <Feature feture={feture} index={index} key={index} />
        ))}
      </motion.div>
    </>
  );
}
export default Features;
