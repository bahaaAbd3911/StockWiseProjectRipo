// Import style
import {
  ClientProfilePageConatinerClass,
  componentsContainerClass,
  darkClientProfilePageConatinerClass,
} from "./ClientProfilePage.module.css";

// Import Hooks
import { useState } from "react";

// Import Hooks
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";

// Import Components
import UserSettings from "../../../Components/UserSettings/UserSettings";
import SearchBar from "../../../Components/SearchBar/SearchBar";
import ClientList from "../../../Components/ClientList/ClientList";
import ShoppingCartPage from "../ShoppingCartPage/ShoppingCartPage";
import FavoritePage from "../FavoritePage/FavoritePage";
import Profile from "./Profile";
import ClientOrdersPage from "../ClientOrdersPage/ClientOrdersPage";

function ClientProfilePage() {
  const { userList, setUserList, dark } = useContext(AuthContext);

  const activeItem = userList.find((item) => item.isActive === true).label;
  return (
    <>
      <div
        className={`${ClientProfilePageConatinerClass} ${dark && darkClientProfilePageConatinerClass}`}
      >
        <UserSettings />
        <SearchBar value={1} />
        <div className={componentsContainerClass}>
          <ClientList />
          {activeItem === "My Orders" && <ClientOrdersPage />}
          {activeItem === "My Profile" && <Profile />}
          {activeItem === "My Cart" && <ShoppingCartPage />}
          {activeItem === "My Favorites" && <FavoritePage />}
        </div>
      </div>
    </>
  );
}

export default ClientProfilePage;
