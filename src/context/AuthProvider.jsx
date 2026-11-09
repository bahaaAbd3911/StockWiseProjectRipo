import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { productsList, productReviews } from "../objects.js";
// Import Image
import img1 from "../Images/AirFrier.jpg";

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState();
  const [dark, setDark] = useState(
    JSON.parse(localStorage.getItem("theme")) || false,
  );
  const [lang, setLang] = useState(localStorage.getItem("lang") || "eng");
  const [isSign, setIsSign] = useState(
    JSON.parse(localStorage.getItem("isSign")),
  );
  const [searchFilters, setSearchFilters] = useState({
    productName: "",
    productCategoty: "",
    productPrice: [],
    productRate: "",
    isStock: false,
  });
  const [message, setMessage] = useState({
    isShow: false,
    msgTxt: "",
    msgBGColor: "",
  });

  const [products, setProducts] = useState(productsList);

  const [comments, setComments] = useState(productReviews);

  const userOrders = [
    {
      productImage: img1,
      orderNumber: 10,
      orderDate: "11/7/2026",
      orderStatuse: "waitingList",
    },

    {
      productImage: img1,
      orderNumber: 10,
      orderDate: "11/7/2026",
      orderStatuse: "waitingList",
    },

    {
      productImage: img1,
      orderNumber: 10,
      orderDate: "11/7/2026",
      orderStatuse: "waitingList",
    },

    {
      productImage: img1,
      orderNumber: 10,
      orderDate: "11/7/2026",
      orderStatuse: "waitingList",
    },
  ];

  const [userList, setUserList] = useState([
    {
      icon: <i className="fa-solid fa-user"></i>,
      label: "My Profile",
      arbLabel: "الصفحة الشخصية",
      isActive: true,
      index: 0,
    },
    {
      icon: <i className="fa-solid fa-box"></i>,
      label: "My Orders",
      arbLabel: "طلباتي",
      isActive: false,
      index: 1,
    },
    {
      icon: <i className="fa-solid fa-cart-shopping"></i>,
      label: "My Cart",
      arbLabel: "سلة التسوق",
      isActive: false,
      index: 2,
    },
    {
      icon: <i className="fa-solid fa-heart"></i>,
      label: "My Favorites",
      arbLabel: "قائمتي المفضلة",
      isActive: false,
      index: 3,
    },
    {
      icon: <i className="fa-solid fa-right-from-bracket"></i>,
      label: "Log Out",
      arbLabel: "تسجيل الخروج",
      isActive: false,
      index: 4,
    },
  ]);

  const [orderStages, setOrderStages] = useState([
    {
      num: 1,
      name: "Shipping & Contact",
      arbName: "الشحن والتواصل",
      isSelected: true,
      width: "33%",
      label: "Shipping",
      alert: false,
    },
    {
      num: 2,
      name: "Payment Method",
      arbName: "طريقة الدفع",
      isSelected: false,
      width: "66%",
      label: "Payment",
      alert: false,
    },
    {
      num: 3,
      name: "Review And Place Order",
      arbName: "مراجعة الطلب وتقديمه",
      isSelected: false,
      width: "100%",
      label: "Review",
      alert: false,
    },
  ]);

  const [categories, setCategories] = useState([
    {
      id: 1,
      name: "Electronics",
      nameAr: "الإلكترونيات",
      icon: "fa-solid fa-laptop",
      productsCount: 120,
      isSelected: false,
    },
    {
      id: 2,
      name: "Clothing",
      nameAr: "الملابس",
      icon: "fa-solid fa-shirt",
      productsCount: 250,
      isSelected: false,
    },
    {
      id: 3,
      name: "Shoes",
      nameAr: "الأحذية",
      icon: "fa-solid fa-shoe-prints",
      productsCount: 85,
      isSelected: false,
    },
    {
      id: 4,
      name: "Watches",
      nameAr: "الساعات",
      icon: "fa-solid fa-clock",
      productsCount: 45,
      isSelected: false,
    },
    {
      id: 5,
      name: "Accessories",
      nameAr: "الإكسسوارات",
      icon: "fa-solid fa-gem",
      productsCount: 90,
      isSelected: false,
    },
    {
      id: 6,
      name: "Home & Furniture",
      nameAr: "المنزل والأثاث",
      icon: "fa-solid fa-couch",
      productsCount: 110,
      isSelected: false,
    },
    {
      id: 7,
      name: "Beauty & Personal Care",
      nameAr: "الجمال والعناية الشخصية",
      icon: "fa-solid fa-spa",
      productsCount: 75,
      isSelected: false,
    },
    {
      id: 8,
      name: "Sports & Fitness",
      nameAr: "الرياضة واللياقة البدنية",
      icon: "fa-solid fa-dumbbell",
      productsCount: 65,
      isSelected: false,
    },
    {
      id: 9,
      name: "Books & Stationery",
      nameAr: "الكتب والقرطاسية",
      icon: "fa-solid fa-book",
      productsCount: 140,
      isSelected: false,
    },
    {
      id: 10,
      name: "Toys & Games",
      nameAr: "الألعاب والترفيه",
      icon: "fa-solid fa-gamepad",
      productsCount: 60,
      isSelected: false,
    },
    {
      id: 11,
      name: "Food & Beverages",
      nameAr: "الأطعمة والمشروبات",
      icon: "fa-solid fa-utensils",
      productsCount: 95,
      isSelected: false,
    },
    {
      id: 12,
      name: "Bags & Backpacks",
      nameAr: "الحقائب وحقائب الظهر",
      icon: "fa-solid fa-bag-shopping",
      productsCount: 55,
      isSelected: false,
    },
  ]);

  const [orderFormFields, setorderFormFields] = useState([
    {
      data: "",
      flag: false,
      errorMsg: "",
      arbErrorMsg: "",
      index: 0,
    },
    {
      data: "",
      flag: false,
      errorMsg: "",
      arbErrorMsg: "",
      index: 1,
    },
    {
      data: "",
      flag: false,
      errorMsg: "",
      arbErrorMsg: "",
      index: 2,
    },
    {
      data: "",
      flag: false,
      errorMsg: "",
      arbErrorMsg: "",
      index: 3,
    },
    {
      data: "",
      flag: false,
      errorMsg: "",
      arbErrorMsg: "",
      index: 4,
    },
    {
      data: "",
      flag: false,
      errorMsg: "",
      arbErrorMsg: "",
      index: 5,
    },
    {
      data: "",
      flag: false,
      errorMsg: "",
      arbErrorMsg: "",
      index: 6,
    },
    {
      data: "",
      flag: false,
      errorMsg: "",
      arbErrorMsg: "",
      index: 7,
    },
  ]);
  return (
    <AuthContext.Provider
      value={{
        dark,
        setDark,
        lang,
        setLang,
        isSign,
        setIsSign,
        searchFilters,
        setSearchFilters,
        message,
        setMessage,
        products,
        categories,
        setCategories,
        comments,
        setComments,
        orderStages,
        setOrderStages,
        userList,
        setUserList,
        userOrders,
        orderFormFields,
        setorderFormFields,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
