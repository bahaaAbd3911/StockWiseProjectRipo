import {
  UserProfileMainInfoContainerClass,
  userImgClass,
  userDataContainerClass,
  eidtBtnContainerClass,
  starBgClass,
  darkUserProfileMainInfoContainerClass,
} from "./UserProfileMainInfo.module.css";

// Import Images
import img1 from "../../Images/Favorites/favoriteLogo.png";

// Import Motion
import { motion } from "motion/react";

// Import Hooks
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
function UserProfileMainInfo() {
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
          <div className={userImgClass}>
            <img src={img1} />
          </div>

          <div className={userDataContainerClass}>
            <div>
              <div>{lang === "arb" ? "إسم المسخدم" : "User Name"}</div>
              <div className={starBgClass}>
                <div className="fa-solid fa-certificate">
                  <div className="fa-solid fa-check"></div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div>{lang === "arb" ? "البريد الإلكتروني" : "Email"}</div>
            </div>
            <div>
              <div>
                <i className="fa-solid fa-calendar-days"></i>
              </div>
              <div>{lang === "arb" ? "التاريخ" : "Date"}</div>
            </div>
          </div>
        </div>

        <div className={eidtBtnContainerClass}>
          <div>
            <i className="fa-solid fa-pen"></i>
          </div>
          <div>{lang === "arb" ? "تعديل المعلومات" : "Edit Profile"}</div>
        </div>
      </motion.div>
    </>
  );
}

export default UserProfileMainInfo;
