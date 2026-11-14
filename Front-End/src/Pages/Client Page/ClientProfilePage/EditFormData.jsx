// Import Style
import {
  formContainerClass,
  formHeaderClass,
  formTitleClass,
  formWelcommingMsgClass,
  inputsContainerClass,
  buttonContainerClass,
  linksContainerClass,
  imageContainerClass,
  arbFormContainerClass,
  darkFormContainerClass,
  darkLinksContainerClass,
} from "../../../Components/Form/Sign.module.css";

// Import Hooks
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { useNavigate } from "react-router";

// Import Hooks
import Icon from "../../../Components/Icon/Icon";
import Input from "../../../Components/Form/Input";

function Form({
  formTitle,
  arbFormTitle,
  formWelcommingMsg,
  arbFormWelcommingMsg,
  icon,
  inputsList,
  setSignFormData,
  validationFunction,
  setImage,
  image,
  setOpen,
}) {
  const navigate = useNavigate();

  const { lang, dark } = useContext(AuthContext);
  return (
    <>
      <div
        className={`${formContainerClass} ${arbFormContainerClass} ${dark && darkFormContainerClass}`}
      >
        <div className={formHeaderClass}>
          <div className={formTitleClass}>
            {lang === "arb" ? arbFormTitle : formTitle}
          </div>
          <div className={formWelcommingMsgClass}>
            <div>
              <Icon iconSrc={icon} />
            </div>
            <div>
              {lang === "arb" ? arbFormWelcommingMsg : formWelcommingMsg}
            </div>
          </div>
        </div>
        <div className={inputsContainerClass}>
          {inputsList.map((input, index) => (
            <Input
              data={input}
              key={index}
              setSignFormData={setSignFormData}
              setImage={setImage}
              image={image}
            />
          ))}
        </div>
        {/* {status === "Up" && (
          <div className={imageContainerClass}>
            <img src={image && URL.createObjectURL(image)} />
          </div>
        )} */}
        <div className={imageContainerClass}>
          <img src={image && URL.createObjectURL(image)} />
        </div>
        <div className={buttonContainerClass}>
          <button
            onClick={() => {
              validationFunction(setSignFormData, inputsList);
            }}
          >
            {/* {status === "In" && lang === "arb" && "تسجيل الدخول"}
            {status === "In" && lang !== "arb" && "Sign In"}
            {status === "Up" && lang === "arb" && "إنشاء حساب"}
            {status === "Up" && lang !== "arb" && "Sign Up"} */}
            Submit
          </button>
        </div>
        <div
          className={`${linksContainerClass} ${dark && darkLinksContainerClass}`}
        >
          <div
            onClick={() => {
              //   status === "In" ? navigate("/SignUp") : navigate("/SignIn");
            }}
          >
            {/* {status === "In" && lang === "arb" && "إنشاء حساب جديد"}
            {status === "In" && lang !== "arb" && "Create New Account"}
            {status === "Up" && lang === "arb" && "لدي حساب بافعل"}
            {status === "Up" && lang !== "arb" && "Already Have An Account"} */}
          </div>
          <div
            onClick={() => {
              //   navigate("/client/profile");
              setOpen(false);
            }}
          >
            {lang === "arb" && "العودة الى الصفحة الشخصية"}
            {lang !== "arb" && "Go Back To Profile"}
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
