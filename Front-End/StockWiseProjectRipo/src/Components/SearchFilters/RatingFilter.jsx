// Import Style
import {
  rateContainerClass,
  goldenStarClass,
  notGoldenStarClass,
  filterContainerClass,
  arbRateContainerClass,
  activeRateContainerClass,
} from "./SearchFilters.module.css";

// Import Hooks
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function RatingFilter() {
  const [rating, setRating] = useState([
    { rate: 1, title: "1 & Above", count: 28, isSelected: false },
    { rate: 2, title: "2 & Above", count: 78, isSelected: false },
    { rate: 3, title: "3 & Above", count: 88, isSelected: false },
    { rate: 4, title: "4 & Above", count: 36, isSelected: false },
    { rate: 5, title: "5 & Above", count: 16, isSelected: false },
  ]);

  const { lang, setSearchFilters } = useContext(AuthContext);

  return (
    <div className={filterContainerClass}>
      <h4>{lang === "arb" ? "التقيمات" : "Rating"}</h4>

      {rating.map((rate) => (
        <div
          className={`${rateContainerClass} ${arbRateContainerClass} ${rate.isSelected && activeRateContainerClass}`}
          key={rate.rate}
          onClick={() => {
            setSearchFilters((prev) => ({
              ...prev,
              productRate: prev.productRate === rate.rate ? "" : rate.rate,
            }));
            setRating((prev) =>
              prev.map((prevRate) => ({
                ...prevRate,
                isSelected:
                  prevRate.rate === rate.rate ? !prevRate.isSelected : false,
              })),
            );
          }}
        >
          <div className="stars">
            {Array.from({ length: 5 }, (_, i) => (
              <i
                key={i}
                className={`fa-solid fa-star ${
                  i < rate.rate ? goldenStarClass : notGoldenStarClass
                }`}
              ></i>
            ))}
          </div>

          <div>({rate.count})</div>
        </div>
      ))}
    </div>
  );
}

export default RatingFilter;
