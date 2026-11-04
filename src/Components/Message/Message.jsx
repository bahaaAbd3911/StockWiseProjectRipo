// Import Style
import { MessageContainerClass, reminderClass } from "./Message.module.css";

// Import Motion
import { motion } from "motion/react";

// Import Hooks
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function Message({ mesgTxt, msgBGColor, reminder, arbMsgTxt }) {
  const { lang } = useContext(AuthContext);

  return (
    <>
      <motion.div
        className={MessageContainerClass}
        style={{ background: msgBGColor }}
        initial={{ opacity: 0, y: -400, x: -200 }}
        whileInView={{ opacity: 1, y: -200, x: -200 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4 }}
      >
        <div>{lang === "arb" ? arbMsgTxt : mesgTxt}</div>

        {reminder && (
          <div className={reminderClass}>
            {lang === "arb"
              ? "أرسل الي اشعارا عندما يتوفر المنتج"
              : "Reminde Me When It's Available"}
          </div>
        )}
      </motion.div>
    </>
  );
}

export default Message;
