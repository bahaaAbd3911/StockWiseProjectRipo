// Import Component
import Advertisement from "../../../Components/Advertisement/Advertisement";
import Features from "../../../Components/Features/Features";
import FeaturedCategories from "../../../Components/featuredCategories/FeaturedCategories";
import BestSellingProducts from "../../../Components/BestSellingProducts/BestSellingProducts";
import LatestProducts from "../../../Components/LatestProducts/LatestProducts";
import Footer from "../../../Components/Footer/Footer";
import SearchBar from "../../../Components/SearchBar/SearchBar";
import UserSettings from "../../../Components/UserSettings/UserSettings";

// Import Image
import img1 from "../../../Images/istockphoto-1170073824-612x612.jpg";

function ClientHomePage() {
  const data = {
    arbAdTitle: "كل ما تريده ي مكان واحد",
    adTitle: "Everything You Want On One Place",
    arbAdSubTitle: "اكتشف منتجات مذهلة، وأسعار رائعة،",
    adSubTitle: "Discover Amazing Products, great price and",
    arbCom: "وتجربة تسوق سلسة.",
    com: "a seamless shopping experience",
    imgSrc: img1,
  };

  return (
    <>
      <div>
        <UserSettings />
        <SearchBar value={0} />
        <Advertisement data={data} value={0} />
        <Features />
        <FeaturedCategories />
        <BestSellingProducts value={0} />
        <LatestProducts value={0} />
        <Footer />
      </div>
    </>
  );
}

export default ClientHomePage;
