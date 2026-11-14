// Import Style
import {
  ClientPageContainerClass,
  ClientPageContainerDarkModeClass,
} from "../Client Page/ClientProductPage/ClientPage.module.css";

// Import Hooks
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

// Import Router
import { Routes, Route, Navigate } from "react-router";

// Import Components
import ClientHomePage from "./ClientHomePage/ClientHomePage";
import ClientProductsPage from "./ClientProductPage/ClientProductsPage";
import ShoppingCartPage from "./ShoppingCartPage/ShoppingCartPage";
import ProductDetailsPage from "../../Components/ProductDetailsPage/ProductDetailsPage";
import PurchaseConfirmation from "./PurchaseConfirmation/PurchaseConfirmation";
import FavoritePage from "./FavoritePage/FavoritePage";
import ClientProfilePage from "./ClientProfilePage/ClientProfilePage";

function ClientPage() {
  const { dark } = useContext(AuthContext);

  return (
    <div
      className={`${ClientPageContainerClass} ${
        dark ? ClientPageContainerDarkModeClass : ""
      }`}
    >
      <Routes>
        <Route path="/home" element={<ClientHomePage />} />
        <Route path="/products" element={<ClientProductsPage />} />
        <Route path="/favoriteList" element={<FavoritePage />} />
        <Route path="/shoppingList" element={<ShoppingCartPage />} />
        <Route
          path="/ProductDetails/:productID"
          element={<ProductDetailsPage />}
        />
        <Route
          path="/PurchaseConfirmation"
          element={<PurchaseConfirmation />}
        />
        <Route path="/profile" element={<ClientProfilePage />} />

        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </div>
  );
}

export default ClientPage;
