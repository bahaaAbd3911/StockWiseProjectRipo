// Import Style
import {
  ProductStaticsContainerClass,
  avrageRateClass,
  starsContainerClass,
  rateBarsContainerClass,
  rateBarContainerClass,
  barContainerClass,
  goldenStarClass,
  notGoldenStarClass,
} from "./ProductStatics.module.css";

// Import Hooks
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function ProductStatics({ productID, calcCountForEachRate }) {
  const { comments, lang } = useContext(AuthContext);

  const productcomments = comments.filter(
    (comment) => comment.productID == productID,
  );

  function calcRate(comments) {
    let length = comments.length - 1;
    let result = 0;
    while (length > 0) {
      result = result + comments[length].rating;
      length--;
    }
    const avrageRates = result / comments.length;
    return avrageRates;
  }

  const rates = [5, 4, 3, 2, 1];
  return (
    <>
      <div className={ProductStaticsContainerClass}>
        <div className={avrageRateClass}>
          <h1>{calcRate(productcomments).toFixed(2)}</h1>
          <div className={starsContainerClass}>
            {Array.from({ length: 5 }, (_, i) => (
              <i
                key={i}
                className={`fa-solid fa-star ${
                  i < calcRate(productcomments)
                    ? goldenStarClass
                    : notGoldenStarClass
                }`}
              ></i>
            ))}
          </div>
          <div>
            {lang === "arb"
              ? `بناء على استطلاع ${productcomments.length} آراء`
              : `Based On ${productcomments.length} Reviews`}
          </div>
        </div>
        <div className={rateBarsContainerClass}>
          {rates.map((rate, index) => (
            <div className={rateBarContainerClass} key={index}>
              <div>{rate}</div>
              <div>
                <i className="fa-solid fa-star"></i>
              </div>
              <div className={barContainerClass}>
                <div
                  style={{
                    width:
                      (calcCountForEachRate(productcomments)[rate - 1] /
                        productcomments.length) *
                      100,
                  }}
                ></div>
              </div>
              <div>{calcCountForEachRate(productcomments)[rate - 1]}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductStatics;
