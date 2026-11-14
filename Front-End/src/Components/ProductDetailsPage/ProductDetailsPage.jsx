// Import Style
import { ProductDetailsPageContainerClass } from "./ProductDetailsPage.module.css";

// Import Hooks
import { useParams } from "react-router";

// Import Components
import UserSettings from "../../Components/UserSettings/UserSettings";
import SearchBar from "../SearchBar/SearchBar";
import Footer from "../Footer/Footer";
import ProductDetails from "../ProductDetails/ProductDetails";
import SimilarProducts from "../SimilarProducts/SimilarProducts";
import CommentOnProducts from "../CommentOnProducts/CommentOnProducts";
import { useState } from "react";

function ProductDetailsPage() {
  const { productID } = useParams();
  // const [showAddCommentForm, setShowAddCommentForm] = useState(false);
  return (
    <>
      <div className={ProductDetailsPageContainerClass}>
        <UserSettings />
        <SearchBar value={0} />
        <ProductDetails productID={productID} />
        <CommentOnProducts
          productID={productID}
          // showAddCommentForm={showAddCommentForm}
          // setShowAddCommentForm={setShowAddCommentForm}
        />
        <SimilarProducts productID={productID} />
        <Footer />
      </div>
    </>
  );
}

export default ProductDetailsPage;
