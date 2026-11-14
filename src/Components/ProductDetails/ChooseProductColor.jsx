// Import Style
import {
  chooseProductColorContainerClass,
  chooseColorClass,
  choosenColorClass,
  activeColorClass,
} from "./ProductDetails.module.css";

// Import Hooks
import { useState } from "react";

function ChooseProductColor({ productData }) {
  const [choosenColor, setChoosenColor] = useState("");
  return (
    <>
      <div className={chooseProductColorContainerClass}>
        {productData.availableColors.map((color, index) => (
          <div
            key={index}
            className={`${choosenColorClass} ${choosenColor === color.name ? activeColorClass : ""}`}
            onClick={() => {
              setChoosenColor(color.name);
            }}
          >
            <div
              className={`${chooseColorClass}`}
              style={{ background: color.hex }}
            ></div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ChooseProductColor;
