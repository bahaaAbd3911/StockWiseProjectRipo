// Import Style
import {
  PurchaseConfirmationContianerClass,
  darkPurchaseConfirmationContianerClass,
  arbPurchaseConfirmationContianerClass,
  FormContainerClass,
  rightSectionClass,
  leftSectionClass,
  gridContainerClass,
  darkRightSectionClass,
} from "./PurchaseConfirmation.module.css";

// Import Hooks
import { useState, useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";

// Import Components
import UserSettings from "../../../Components/UserSettings/UserSettings";
import SearchBar from "../../../Components/SearchBar/SearchBar";
import PurchaseConfirmationHeader from "./PurchaseConfirmationHeader";
import OrderData from "./ConfirmationStages/OrderData";
import ShippingForm from "./ShippingForm/ShippingForm";
import PaymentMethod from "./PaymentMethod/PaymentMethod";
import PlaceOrder from "./PlaceOrder/PlaceOrder";
import OrderSummery from "./OrderSummery/OrderSummery";

function PurchaseConfirmation() {
  const { dark, lang, orderStages, setOrderStages } = useContext(AuthContext);

  const [selectedStage, setSelectedStage] = useState(orderStages[0]);
  return (
    <>
      <div
        className={`${PurchaseConfirmationContianerClass} ${dark && darkPurchaseConfirmationContianerClass} ${lang === "arb" && arbPurchaseConfirmationContianerClass}`}
      >
        <UserSettings />
        <SearchBar value={1} />
        <PurchaseConfirmationHeader />
        <div className={gridContainerClass}>
          <div className={leftSectionClass}>
            <OrderData
              selectedStage={selectedStage}
              setSelectedStage={setSelectedStage}
              orderStages={orderStages}
            />
            <div className={FormContainerClass}>
              <div>
                {selectedStage.label === "Shipping" && (
                  <ShippingForm
                    selectedStage={selectedStage}
                    setSelectedStage={setSelectedStage}
                  />
                )}
                {selectedStage.label === "Payment" && (
                  <PaymentMethod
                    selectedStage={selectedStage}
                    setSelectedStage={setSelectedStage}
                  />
                )}
                {selectedStage.label === "Review" && (
                  <PlaceOrder
                    selectedStage={selectedStage}
                    setSelectedStage={setSelectedStage}
                  />
                )}
              </div>
              <div></div>
            </div>
          </div>

          <div
            className={`${rightSectionClass} ${dark && darkRightSectionClass}`}
          >
            <OrderSummery />
          </div>
        </div>
      </div>
    </>
  );
}

export default PurchaseConfirmation;
