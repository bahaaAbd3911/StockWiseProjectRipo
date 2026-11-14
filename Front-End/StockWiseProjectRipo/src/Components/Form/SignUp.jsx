// Import Style
import { mainFormContainerClass } from "./Sign.module.css";

// Import Components
import UserSettings from "../../Components/UserSettings/UserSettings";

// Import Functions
import { SignUpValidation } from "../../randomFunctions";

// Import Hooks
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

// Import Icons
import rocketIcon from "../../Images/Icon/rocket.png";

// Import Components
import Form from "./Form";

function SignUp() {
  const { lang, dark } = useContext(AuthContext);

  // Checkbox State
  const [checkBoxError, setCheckBoxError] = useState("");

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

  const [image, setImage] = useState();

  // const [checkBox, setCheckBox] = useState(false);

  return (
    <>
      <div className={mainFormContainerClass}>
        <UserSettings />
        <Form
          formTitle={"Sign Up"}
          arbFormTitle={"إنشاء حساب جديد"}
          formWelcommingMsg={"Lets Get Started"}
          arbFormWelcommingMsg={"لنبدأ"}
          icon={rocketIcon}
          inputsList={signUpformData}
          setSignFormData={setSignUpFormData}
          status={"Up"}
          validationFunction={SignUpValidation}
          setImage={setImage}
          image={image}
        />
      </div>
    </>
  );
}

export default SignUp;
