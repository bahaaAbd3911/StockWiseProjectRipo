// Import Style
import { inputFieldContainerClass, errorAlarmClass } from "./Sign.module.css";

// Import Hooks
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function Input({ data, setSignFormData, setImage, image }) {
  const { lang } = useContext(AuthContext);
  function handleImageChange(e) {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
    setSignFormData((prev) => {
      let updated = [...prev];
      updated[5].data = file.name;
      updated[5].errorMsg = "";
      updated[5].flag = false;
      return updated;
    });
  }
  return (
    <>
      <div className={inputFieldContainerClass}>
        <div>
          <div>
            <i className={data.iconClass}></i>
          </div>

          <input
            type={data.type}
            value={data.index === 5 ? "" : data.data}
            placeholder={
              lang === "arb" ? data.arbPlaceHolder : data.placeHolder
            }
            autoComplete={
              data.inputType === "email"
                ? "email"
                : data.inputType === "password"
                  ? "current-password"
                  : "name"
            }
            onChange={
              data.index === 5
                ? handleImageChange
                : (e) => {
                    const value = e.target.value;

                    setSignFormData((prev) => {
                      const updated = [...prev];

                      updated[data.index] = {
                        ...updated[data.index],
                        data: value,
                        errorMsg: "",
                        flag: false,
                      };

                      return updated;
                    });
                  }
            }
          />
        </div>

        {!image ? (
          <>
            <div className={errorAlarmClass}>
              {data.index == 5 && lang !== "arb"
                ? "Upload Your Personal Image"
                : data.errorMsg}
              {data.index == 5 && lang === "arb"
                ? "أضف صورتك الشخصية"
                : data.errorMsg}
            </div>
          </>
        ) : (
          data.flag && <div className={errorAlarmClass}>{data.errorMsg}</div>
        )}
      </div>
    </>
  );
}

export default Input;
