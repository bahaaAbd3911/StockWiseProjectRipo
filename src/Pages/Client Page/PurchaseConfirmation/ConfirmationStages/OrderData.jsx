// Import Style
import {
  OrderDataContainerClass,
  darkOrderDataContainerClass,
} from "./ConfirmationStages.module.css";

// Import Hooks
import { useState, useContext } from "react";
import { AuthContext } from "../../../../context/AuthContext";

// Import Component
import ActiveComponent from "../ActiveComponent";

function OrderData({ selectedStage, setSelectedStage }) {
  const { dark, lang, orderStages, setOrderStages } = useContext(AuthContext);

  return (
    <>
      <div
        className={`${OrderDataContainerClass} ${dark && darkOrderDataContainerClass}`}
      >
        <ActiveComponent
          selectedStage={selectedStage}
          setSelectedStage={setSelectedStage}
          orderStages={orderStages}
          setOrderStages={setOrderStages}
        />
      </div>
    </>
  );
}

export default OrderData;
