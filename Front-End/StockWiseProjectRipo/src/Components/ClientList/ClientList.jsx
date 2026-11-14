// Import Style
import {
  ClientListContainerClass,
  itemContaienrClass,
  activeItemClass,
  darkClientListContainerClass,
  arbClientListContainerClass,
} from "./ClientList.module.css";

// Import Hooks
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function ClientList() {
  const { userList, setUserList, dark, lang } = useContext(AuthContext);

  return (
    <>
      <div
        className={`${ClientListContainerClass} ${dark && darkClientListContainerClass} ${lang === "arb" && arbClientListContainerClass}`}
      >
        {userList.map((item, index) => (
          <div
            key={index}
            className={`${itemContaienrClass} ${item.isActive && activeItemClass}`}
            onClick={() => {
              setUserList((prev) => {
                let updated = prev.map((itemX, itemXIndex) => ({
                  ...itemX,
                  isActive: index === itemXIndex ? true : false,
                }));
                return updated;
              });
            }}
          >
            <div>{item.icon}</div>
            <div>{lang === "arb" ? item.arbLabel : item.label}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ClientList;
