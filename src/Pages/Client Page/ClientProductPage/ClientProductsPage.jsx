// Import Components
import SearchBar from "../../../Components/SearchBar/SearchBar";
import UserSettings from "../../../Components/UserSettings/UserSettings";
import Advertisement from "../../../Components/Advertisement/Advertisement";
import Products from "../../../Components/Products/Products";
// Import Image
import img1 from "../../../Images/perfume.jpg";
import SearchFilters from "../../../Components/SearchFilters/SearchFilters";

// Import Style
import {
  searchAndResultContainerClass,
  arbSearchAndResultContainerClass,
} from "./ClientPage.module.css";

// Import Hooks
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";

function ClientProductsPage() {
  const data = {
    arbAdTitle: "تجربتك المثالية تبدأ هنا",
    adTitle: "Your Perfect Experience Starts Here",
    arbAdSubTitle: "اكتشف تشكيلتنا المتنوعة،",
    adSubTitle: "Discover our diverse range,",
    arbCom: "واعثر على ما يناسب ذوقك وميزانيتك بكل سهولة.",
    com: "Find what suits your taste and budget with ease.",
    imgSrc: img1,
  };
  const { dark, lang, searchFilters, setSearchFilters, products } =
    useContext(AuthContext);

  return (
    <>
      <div style={{ overflowX: "hidden" }}>
        <UserSettings />
        <SearchBar value={0} />
        <Advertisement data={data} />
        <div
          className={`${searchAndResultContainerClass} ${lang === "arb" && arbSearchAndResultContainerClass}`}
        >
          <SearchFilters />
          <Products productsProp={products} status={"productsPage"} />
        </div>
      </div>
    </>
  );
}

export default ClientProductsPage;
