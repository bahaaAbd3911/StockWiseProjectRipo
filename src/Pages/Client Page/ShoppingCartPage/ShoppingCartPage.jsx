// Import Style
import {
  FavoritePageContainerClass,
  PurchaseConfirmationClass,
} from "../FavoritePage/FavoritePage.module.css";

// Import Components
import SearchBar from "../../../Components/SearchBar/SearchBar";
import UserSettings from "../../../Components/UserSettings/UserSettings";
import Footer from "../../../Components/Footer/Footer";
import Filter from "../../../Components/Filter/Filter";
import Products from "../../../Components/Products/Products";
import Header from "../../../Components/Header/Header";

// Import Image
import img1 from "../../../Images/ShoppingCart/cartLogo.png";
// Import Hooks
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { useNavigate } from "react-router";

function ShoppingCartPage() {
  const { products } = useContext(AuthContext);
  let navigate = useNavigate();

  return (
    <>
      <div className={FavoritePageContainerClass}>
        <UserSettings />
        <SearchBar value={1} />
        <Header
          icon={"fa-solid fa-cart-shopping"}
          title={"My Shopping Cart"}
          arbTitle={`سلة التسوق`}
          subTitle={`Everything you need in one place`}
          arbSubTitle={`كل ما تحتاجه في مكان واحد قم بتأكيد الطلب وتحديد طريقة الدفع وتحديد موقعك`}
          img={img1}
        />
        <Filter />
        <Products
          productsProp={products || []}
          status={"cart"}
          state={"Remove"}
        />
        <div
          className={PurchaseConfirmationClass}
          onClick={() => {
            navigate("/client/PurchaseConfirmation");
          }}
        >
          <div>Purchase Confirmation</div>
          <div>
            <i className="fa-solid fa-arrow-right-long"></i>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default ShoppingCartPage;
