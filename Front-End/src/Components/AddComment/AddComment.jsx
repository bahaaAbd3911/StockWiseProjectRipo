// Import Style
import {
  AddCommentContainerClass,
  addReviewContainerClass,
} from "./AddComment.module.css";

// Import Hooks
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function AddComment({ setShowAddCommentForm }) {
  const { lang } = useContext(AuthContext);

  return (
    <>
      <div className={AddCommentContainerClass}>
        <div
          className={addReviewContainerClass}
          onClick={() => {
            setShowAddCommentForm(true);
          }}
        >
          <div>
            <i className="fa-solid fa-pen"></i>
          </div>
          <div>{lang === "arb" ? "إكتب رأيك فالمنتج" : "Write A Review"}</div>
        </div>
        <div>
          {lang === "arb"
            ? `شارك تجربتك مع العملاء الآخرين وساعدهم على اتخاذ القرار الصحيح`
            : `Share Your Experiance With Other Customer And Help Them Make The Right
          Choose`}
        </div>
      </div>
    </>
  );
}

export default AddComment;
