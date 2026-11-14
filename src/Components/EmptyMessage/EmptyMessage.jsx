// Import Style
import {
  EmptyMessageContainerClass,
  EmptyMessageImageClass,
  btnClass,
  arbEmptyMessageContainerClass,
  darkEmptyMessageContainerClass,
} from "./EmptyMessage.module.css";

// Import Router
import { useNavigate } from "react-router";

// Import Hooks
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

// Import Motion
import { motion } from "motion/react";

function EmptyMessage({ img, title, arbTitle, subTitle, arbSubTitle }) {
  let navigate = useNavigate();
  const { dark, lang } = useContext(AuthContext);

  return (
    <>
      <motion.div
        className={`${EmptyMessageContainerClass} ${lang === "arb" && arbEmptyMessageContainerClass} ${dark && darkEmptyMessageContainerClass}`}
        initial={{ opacity: 0, y: -170 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4 }}
      >
        <div className={EmptyMessageImageClass}>
          <img src={img} />
        </div>
        <div>
          <h1>{lang === "arb" ? arbTitle : title}</h1>
          <p>{lang === "arb" ? arbSubTitle : subTitle}</p>
          <div
            className={btnClass}
            onClick={() => {
              navigate("/client/products");
            }}
          >
            <span>
              <i className="fa-solid fa-bag-shopping"></i>
            </span>
            <span>
              {lang === "arb" ? "إبدأ التسوق الان" : "Start Shopping"}
            </span>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default EmptyMessage;
