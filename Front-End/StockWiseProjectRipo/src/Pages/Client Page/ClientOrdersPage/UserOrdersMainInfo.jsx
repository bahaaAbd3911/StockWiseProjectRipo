import {
  UserProfileMainInfoContainerClass,
  userImgClass,
  userDataOrdersPageContainerClass,
  eidtBtnContainerClass,
  starBgClass,
  darkUserProfileMainInfoContainerClass,
} from "../../../Components/UserProfileMainInfo/UserProfileMainInfo.module.css";

// Import Images
import img1 from "../../../Images/Favorites/favoriteLogo.png";

// Import Motion
import { motion } from "motion/react";

// Import Hooks
import { useState, useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
function UserOrdersMainInfo() {
  const { lang, dark } = useContext(AuthContext);
  return (
    <>
      <motion.div
        className={`${UserProfileMainInfoContainerClass} ${dark && darkUserProfileMainInfoContainerClass}`}
        initial={{ opacity: 0, y: -170 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4 }}
      >
        <div>
          <div className={userDataOrdersPageContainerClass}>
            <div>
              <div>{lang === "arb" ? "طلباتي" : "My Orders"}</div>
            </div>
            <div>
              {lang === "arb"
                ? "تابع طلباتك بسهولة"
                : "Track Your Orders Easily"}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default UserOrdersMainInfo;
