// Import Style
import { btnContainerClass } from "./ProductDetails.module.css";

// Import Hooks
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function ProductButtons() {
  const { lang } = useContext(AuthContext);

  return (
    <>
      <div className={btnContainerClass}>
        <div>
          <div>
            <i className="fa-solid fa-cart-shopping"></i>
          </div>
          <div>{lang === "arb" ? "أضف الى سلة التسوق" : "Add To Cart"}</div>
        </div>
        <div>
          <div>
            <i className="fa-solid fa-heart"></i>
          </div>
          <div>
            {lang === "arb" ? "أضف الى قائمة المفضلة" : "Add To Favorite"}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductButtons;
