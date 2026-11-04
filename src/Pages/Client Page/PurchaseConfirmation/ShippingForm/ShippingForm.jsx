// Import Style
import { formContainerClass } from "./ShippingForm.module.css";

// Import Component
import ShippingFormForm1 from "./ShippingFormForm1";
import ShippingFormForm2 from "./ShippingFormForm2";
import ShippingFormForm3 from "./ShippingFormForm3";

function ShippingForm({ setSelectedStage, selectedStage }) {
  return (
    <>
      <div className={formContainerClass}>
        <ShippingFormForm1 />
        <ShippingFormForm2 />
        <ShippingFormForm3
          selectedStage={selectedStage}
          setSelectedStage={setSelectedStage}
        />
      </div>
    </>
  );
}

export default ShippingForm;
