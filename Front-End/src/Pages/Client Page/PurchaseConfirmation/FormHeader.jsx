// Import Style
import { FormHeaderContainerClass } from "./PurchaseConfirmation.module.css";

// Import Component
import Icon from "../../../Components/Icon/Icon";

// Import Hooks
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";

function FormHeader({ icon, title, subTtile, arbTitle, arbSubTtile }) {
  const { dark, lang } = useContext(AuthContext);

  return (
    <>
      <div className={FormHeaderContainerClass}>
        <div>
          <Icon iconSrc={icon} />
          <div>{lang === "arb" ? arbTitle : title}</div>
        </div>
        <div>{lang === "arb" ? arbSubTtile : subTtile}</div>
      </div>
    </>
  );
}
export default FormHeader;
