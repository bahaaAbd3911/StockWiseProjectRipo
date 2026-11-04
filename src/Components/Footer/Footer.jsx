// Import Style
import {
  footerContainerClass,
  logoAndNameContainerClass,
  linksContainerClass,
  serviceContainerClass,
  socialMediaContainerClass,
  linesContainerClass,
  logoAndNameContnentClass,
  logoContanerClass,
  nameContainerClass,
  darkFooterContainerClass,
  bottomLineContainerClass,
  borderClass,
  arbBorderClass,
  facebookIconClass,
  instagramIconClass,
  twitterIconClass,
  youtubeIconClass,
} from "./Footer.module.css";

// Import Hooks
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

// Import Motion
import { motion } from "motion/react";

function Footer() {
  const { dark, lang } = useContext(AuthContext);

  return (
    <motion.div
      className={`${footerContainerClass} ${
        dark ? darkFooterContainerClass : ""
      }`}
      dir={lang === "arb" ? "rtl" : "ltr"}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4 }}
    >
      <div className={linesContainerClass}>
        <div className={logoAndNameContainerClass}>
          <div className={logoAndNameContnentClass}>
            <div className={logoContanerClass}>
              <i className="fa-solid fa-basket-shopping"></i>
            </div>

            <div className={nameContainerClass}>
              <span>Stock</span>
              <span>Wise</span>
            </div>
          </div>

          <div>
            <span>{lang === "arb" ? "اختر بشكل أفضل" : "Better Choose "}</span>
            <span>
              {lang === "arb" ? "تسوّق بذكاء أكبر" : "Smarter Shopping"}
            </span>
          </div>
        </div>

        <div className={linksContainerClass}>
          <h3>{lang === "arb" ? "روابط سريعة" : "Quick Links"}</h3>
          <div>{lang === "arb" ? "الرئيسية" : "Home"}</div>
          <div>{lang === "arb" ? "المتجر" : "Shop"}</div>
          <div>{lang === "arb" ? "من نحن" : "About"}</div>
          <div>{lang === "arb" ? "اتصل بنا" : "Contact"}</div>
        </div>

        <div className={serviceContainerClass}>
          <h3>{lang === "arb" ? "خدمة العملاء" : "Customer Service"}</h3>
          <div>{lang === "arb" ? "الأسئلة الشائعة" : "FAQs"}</div>
          <div>{lang === "arb" ? "الشحن والتوصيل" : "Shipping"}</div>
          <div>{lang === "arb" ? "الإرجاع والاستبدال" : "Returns"}</div>
          <div>{lang === "arb" ? "تتبع الطلب" : "Track Order"}</div>
        </div>

        <div className={socialMediaContainerClass}>
          <h3>{lang === "arb" ? "تابعنا" : "Follow Us"}</h3>

          <div>
            <div className={facebookIconClass}>
              <i className="fa-brands fa-facebook"></i>
            </div>
            <div className={instagramIconClass}>
              <i className="fa-brands fa-instagram"></i>
            </div>
            <div className={twitterIconClass}>
              <i className="fa-brands fa-x-twitter"></i>
            </div>
            <div className={youtubeIconClass}>
              <i className="fa-brands fa-youtube"></i>
            </div>
          </div>
        </div>
      </div>

      <div className={bottomLineContainerClass}>
        <div>
          <span>&#169;</span>
          <span>
            {lang === "arb"
              ? "2005 ستوك وايز. جميع الحقوق محفوظة"
              : "2005 StockWise. All rights reserved"}
          </span>
        </div>

        <div>
          <div className={`${lang === "arb" ? arbBorderClass : borderClass}`}>
            {lang === "arb" ? "سياسة الخصوصية" : "Privacy Policy"}
          </div>
          <div>{lang === "arb" ? "شروط الخدمة" : "Terms of Service"}</div>
        </div>
      </div>
    </motion.div>
  );
}

export default Footer;
