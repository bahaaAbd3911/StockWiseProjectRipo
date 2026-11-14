// Import Slider
import "rc-slider/assets/index.css";
import Slider from "rc-slider";

import {
  priceInputs,
  filterContainerClass,
  priceRangeFilter,
  darkFilterContainerClass,
} from "./SearchFilters.module.css";

// Import Hooks
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function PriceRangeFilter({ min = 0, max = 2000, onChange }) {
  const { dark, lang, searchFilters, setSearchFilters } =
    useContext(AuthContext);

  const [range, setRange] = useState([min, max]);

  const updateRange = (newRange) => {
    setRange(newRange);
    onChange?.(newRange);
    setSearchFilters((prev) => ({ ...prev, productPrice: newRange }));
  };

  const handleInputChange = (index, value) => {
    const parsedValue = value === "" ? min : Number(value);

    const nextRange = [...range];

    if (index === 0) {
      nextRange[0] = Math.max(min, Math.min(parsedValue, range[1]));
    } else {
      nextRange[1] = Math.min(max, Math.max(parsedValue, range[0]));
    }

    updateRange(nextRange);
  };

  return (
    <div
      className={`${priceRangeFilter} ${filterContainerClass} ${dark && darkFilterContainerClass}`}
    >
      <h4>{lang === "arb" ? "مجال الأسعار" : "Price Range"}</h4>

      <Slider
        range
        min={min}
        max={max}
        step={10}
        value={range}
        onChange={updateRange}
        allowCross={false}
        className="price-slider"
      />

      <div className={priceInputs}>
        <label>
          <span>$</span>
          <input
            type="number"
            min={min}
            max={range[1]}
            value={range[0]}
            onChange={(e) => handleInputChange(0, e.target.value)}
          />
        </label>

        <label>
          <span>$</span>
          <input
            type="number"
            min={range[0]}
            max={max}
            value={range[1]}
            onChange={(e) => handleInputChange(1, e.target.value)}
          />
        </label>
      </div>
    </div>
  );
}
