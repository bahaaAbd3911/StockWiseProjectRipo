// Import Style
import {
  ProfileContainerClass,
  ordersAndInfoContainerClass,
  arbProfileContainerClass,
  darkProfileContainerClass,
} from "./ClientProfilePage.module.css";

// Import Motion
import { motion } from "motion/react";

// Import Hooks
import { useState, useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";

// Import Components
import UserProfileMainInfo from "../../../Components/UserProfileMainInfo/UserProfileMainInfo";
import ClitentStatics from "../../../Components/UserProfileMainInfo/ClitentStatics";
import ClientPersonalInfo from "../../../Components/UserProfileMainInfo/ClientPersonalInfo";
import RecentOrders from "../../../Components/UserProfileMainInfo/RecentOrders";

function Profile() {
  const { lang, dark } = useContext(AuthContext);
  return (
    <>
      <div
        className={`${ProfileContainerClass} ${lang === "arb" && arbProfileContainerClass} ${dark && darkProfileContainerClass}`}
      >
        <UserProfileMainInfo />
        <ClitentStatics />
        <motion.div
          className={ordersAndInfoContainerClass}
          initial={{ opacity: 0, x: -270 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
        >
          <ClientPersonalInfo />
          <RecentOrders />
        </motion.div>
      </div>
    </>
  );
}
export default Profile;
