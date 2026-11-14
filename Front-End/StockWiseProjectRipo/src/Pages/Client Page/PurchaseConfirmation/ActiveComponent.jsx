// Import Style
import {
  ActiveComponentContainerClass,
  orderStagesContainerClass,
  stageContainerClass,
  borderClass,
  barClass,
  activeStageContainerClass,
} from "./PurchaseConfirmation.module.css";

// Import Hooks
import { useState, useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";

function ActiveComponent({ selectedStage, setSelectedStage, orderStages }) {
  const { dark, lang } = useContext(AuthContext);

  return (
    <>
      <div className={ActiveComponentContainerClass}>
        <div className={orderStagesContainerClass}>
          {orderStages.map((stage, index) => (
            <div
              className={`${stageContainerClass} ${selectedStage.name === stage.name ? activeStageContainerClass : ""}`}
              key={index}
              onClick={() => {
                setSelectedStage(stage);
              }}
            >
              <div>{stage.num}</div>
              <div>{lang === "arb" ? stage.arbName : stage.name}</div>
            </div>
          ))}
        </div>
        <div className={borderClass}>
          <div
            style={{ width: selectedStage.width }}
            className={barClass}
          ></div>
        </div>
      </div>
    </>
  );
}

export default ActiveComponent;
