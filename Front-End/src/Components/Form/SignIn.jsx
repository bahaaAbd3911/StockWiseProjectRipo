// Import Style
import { mainFormContainerClass } from "./Sign.module.css";

// Import Icons
import handIcon from "../../Images/Icon/wave.png";

// Import Hooks
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router";

// Import Functions
import { SignInValidation } from "../../randomFunctions";

// Import Icons
import HandIcon from "../../Images/Icon/wave.png";

// Import Functions

// Import Components
import UserSettings from "../../Components/UserSettings/UserSettings";
import Form from "./Form";

function SignIn({ sign }) {
  const { lang, dark } = useContext(AuthContext);
  const navigate = useNavigate();

  // Form Data
  const [signInformData, setSignInFormData] = useState([
    {
      placeHolder: "User Email",
      arbPlaceHolder: "عنوان البريد الإلكتروني",
      data: "",
      flag: false,
      errorMsg: "",
      arbErrorMsg: "",
      index: 0,
      iconClass: "fa-solid fa-envelope",
      inputType: "email",
    },
    {
      placeHolder: "Password",
      arbPlaceHolder: "كلمة المرور",
      data: "",
      flag: false,
      errorMsg: "",
      arbErrorMsg: "",
      index: 1,
      iconClass: "fa-solid fa-lock",
      inputType: "password",
    },
  ]);

  return (
    <>
      <div className={mainFormContainerClass}>
        <UserSettings />
        <Form
          formTitle={"Sign In"}
          arbFormTitle={"تسجيل الدخول"}
          formWelcommingMsg={"Welcom Again"}
          arbFormWelcommingMsg={"أهلا بك من جديد"}
          icon={HandIcon}
          inputsList={signInformData}
          setSignFormData={setSignInFormData}
          status={"In"}
          validationFunction={SignInValidation}
        />
      </div>
    </>
  );
}

export default SignIn;
