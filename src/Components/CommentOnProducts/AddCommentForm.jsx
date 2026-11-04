// Import Style
import {
  AddCommentFormContainerClass,
  userDataContainerClass,
  textAreaContainerClass,
  btnContainerClass,
  closeBtnClass,
  morningAddCommentFormContainerClass,
  arbAddCommentFormContainerClass,
} from "./CommentOnProducts.module.css";

// Import Hooks
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function AddCommentForm({ setShowAddCommentForm }) {
  const { lang, dark } = useContext(AuthContext);

  return (
    <>
      <div
        className={`${AddCommentFormContainerClass} ${!dark && morningAddCommentFormContainerClass} ${lang === "arb" ? arbAddCommentFormContainerClass : ""}`}
      >
        <div
          className={closeBtnClass}
          onClick={() => {
            setShowAddCommentForm(false);
          }}
        >
          <i className="fa-solid fa-x"></i>
        </div>
        <div className={userDataContainerClass}>
          <div>User Name</div>
          <div>User Image</div>
        </div>
        <div className={textAreaContainerClass}>
          <textarea></textarea>
        </div>
        <div className={btnContainerClass}>
          <div
            onClick={() => {
              setShowAddCommentForm(false);
            }}
          >
            Cancel
          </div>
          <div>Submit</div>
        </div>
      </div>
    </>
  );
}

export default AddCommentForm;
