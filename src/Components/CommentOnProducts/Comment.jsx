// Import Style
import {
  CommentContainerClass,
  commentWriterImageClass,
  commentContentContainerClass,
  commentWriterNameClass,
  commentWriterRateAndTimeClass,
  commentWriterDescreptionClass,
  commentLikesCountClass,
  commentTimeClass,
  commentRateClass,
  goldenStarClass,
  notGoldenStarClass,
} from "./CommentOnProducts.module.css";

// Import Hooks
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function Comment({ comment }) {
  const { lang } = useContext(AuthContext);

  function formatCommentDate(dateString) {
    const commentDate = new Date(dateString);
    const now = new Date();

    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const commentDay = new Date(
      commentDate.getFullYear(),
      commentDate.getMonth(),
      commentDate.getDate(),
    );

    const diffDays = Math.floor((today - commentDay) / (1000 * 60 * 60 * 24));

    let dateText;

    if (diffDays === 0) {
      dateText = "Today";
    } else if (diffDays === 1) {
      dateText = "Yesterday";
    } else if (diffDays < 7 && diffDays > 1) {
      dateText = `${diffDays} days ago`;
    } else {
      dateText = commentDate.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
    }

    const timeText = commentDate.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    return `${dateText} at ${timeText}`;
  }
  return (
    <>
      <div className={CommentContainerClass}>
        <div className={commentWriterImageClass}>
          <img src={comment.commentWriterImage} />
        </div>
        <div className={commentContentContainerClass}>
          <div className={commentWriterNameClass}>
            {comment.commentWriterName}
          </div>
          <div className={commentWriterRateAndTimeClass}>
            <div className={commentRateClass}>
              {Array.from({ length: 5 }, (_, i) => (
                <i
                  key={i}
                  className={`fa-solid fa-star ${
                    i < comment.rating ? goldenStarClass : notGoldenStarClass
                  }`}
                ></i>
              ))}
            </div>
            <div className={commentTimeClass}>
              {formatCommentDate(comment.createdAt)}
            </div>
          </div>
          <div className={commentWriterDescreptionClass}>
            {lang === "arb" ? comment.commentTxtAr : comment.commentTxt}
          </div>
          <div className={commentLikesCountClass}>
            <div>
              <div>
                <i className="fa-solid fa-thumbs-up"></i>
              </div>
              <div>{lang === "arb" ? "تعليق مفيد" : "Helpful"}</div>
            </div>
            <div>({comment.helpfulCount})</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Comment;
