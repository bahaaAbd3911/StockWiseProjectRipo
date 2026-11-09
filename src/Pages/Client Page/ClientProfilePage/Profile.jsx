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
import Form from "./EditFormData";

// Import Icons
import rocketIcon from "../../../Images/Icon/rocket.png";

// import Methods
import { EditFormValidation } from "../../../randomFunctions";

function Profile() {
  const { lang, dark } = useContext(AuthContext);
  const [image, setImage] = useState("");
  // Form Data
  const [signUpformData, setSignUpFormData] = useState([
    {
      placeHolder: "Enter Full Name",
      arbPlaceHolder: "أدخل الاسم الكامل",
      data: "",
      flag: false,
      errorMsg: "",
      arbErrorMsg: "",
      index: 0,
      iconClass: "fa-solid fa-user",
      type: "text",
    },
    {
      placeHolder: "User Email",
      arbPlaceHolder: "عنوان البريد الإلكتروني",
      data: "",
      flag: false,
      errorMsg: "",
      arbErrorMsg: "",
      index: 1,
      iconClass: "fa-solid fa-envelope",
      type: "text",
    },
    {
      placeHolder: "Password",
      arbPlaceHolder: "كلمة المرور",
      data: "",
      flag: false,
      errorMsg: "",
      arbErrorMsg: "",
      index: 2,
      iconClass: "fa-solid fa-lock",
      type: "password",
    },
    {
      placeHolder: "Confirm Password",
      arbPlaceHolder: "تأكيد كلمة المرور",
      data: "",
      flag: false,
      errorMsg: "",
      arbErrorMsg: "",
      index: 3,
      iconClass: "fa-solid fa-lock",
      type: "password",
    },
    {
      placeHolder: "Enter Your Phone Number",
      arbPlaceHolder: "أدخل رقم هاتفك",
      data: "",
      flag: false,
      errorMsg: "",
      arbErrorMsg: "",
      index: 4,
      iconClass: "fa-solid fa-phone",
      type: "number",
    },
    {
      placeHolder: "Upload You Personal Image",
      arbPlaceHolder: "أضف صورتك الشخصية",
      data: "",
      flag: false,
      errorMsg: "",
      arbErrorMsg: "",
      index: 5,
      iconClass: "fa-solid fa-camera",
      type: "file",
    },
  ]);
  const [open, setOpen] = useState(false);
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
          <ClientPersonalInfo setOpen={setOpen} />
          <RecentOrders />
        </motion.div>
        {open && (
          <Form
            formTitle={"Edit Info Form"}
            arbFormTitle={"تعديل البيانات"}
            formWelcommingMsg={
              "Welcome back! Update your profile information to keep your account up to date."
            }
            arbFormWelcommingMsg={
              "مرحباً بعودتك! قم بتحديث معلومات ملفك الشخصي للحفاظ على بيانات حسابك محدثة."
            }
            icon={rocketIcon}
            inputsList={signUpformData}
            setSignFormData={setSignUpFormData}
            validationFunction={EditFormValidation}
            setImage={setImage}
            image={image}
            setOpen={setOpen}
          />
        )}
      </div>
    </>
  );
}
export default Profile;
