// Import Style
import { FavoritePageContainerClass } from "../FavoritePage/FavoritePage.module.css";

// Import Components
import SearchBar from "../../../Components/SearchBar/SearchBar";
import UserSettings from "../../../Components/UserSettings/UserSettings";
import Footer from "../../../Components/Footer/Footer";
import Filter from "../../../Components/Filter/Filter";
import Products from "../../../Components/Products/Products";
import Header from "../../../Components/Header/Header";

// Import Image
import img1 from "../../../Images/Favorites/favoriteLogo.png";

// Import Hooks
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";

function FavoritePage() {
  const { dark, lang, searchFilters, setSearchFilters, products } =
    useContext(AuthContext);

  return (
    <>
      <div className={FavoritePageContainerClass}>
        {/* <UserSettings /> */}
        {/* <SearchBar value={1} /> */}
        <Header
          icon={"fa-solid fa-heart"}
          title={"My Favorites"}
          arbTitle={"قائمة المفضلة"}
          subTitle={`Your Saved Item Are Here. Keep Track Of The Products You Love And Find Them Easily Whenever You Want.`}
          arbSubTitle={`العناصر المحفوظة موجودة هنا. تابع المنتجات التي تحبها واعثر عليها بسهولة وقتما تشاء.`}
          img={img1}
        />
        <Filter />
        <Products
          productsProp={products || []}
          status={"favorite"}
          state={"Add"}
        />
        <Footer />
      </div>
    </>
  );
}

export default FavoritePage;
