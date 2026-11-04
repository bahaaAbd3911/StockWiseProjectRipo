// Import Style
import {
  CommentOnProductsContainerClass,
  commentStaticsAddCommentContainerClass,
  commentsContainerClass,
  commentsSectionContainerClass,
  darkCommentOnProductsContainerClass,
  arbCommentOnProductsContainerClass,
} from "./CommentOnProducts.module.css";

// Import Hooks
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";

// Import Motion
import { motion } from "motion/react";

// Import Object
import { filtersArray } from "../../objects";

// Import Function
import { calcCountForEachRate } from "../../randomFunctions";

// Import Components
import ProductStatics from "../ProductStatics/ProductStatics";
import AddComment from "../AddComment/AddComment";
import Comment from "./Comment";
import AddCommentForm from "./AddCommentForm";
import CommentsFilter from "./CommentsFilter";

function CommentOnProducts({ productID }) {
  const { comments, dark, lang } = useContext(AuthContext);
  const [showAddCommentForm, setShowAddCommentForm] = useState(false);

  const productcomments = comments.filter(
    (comment) => comment.productID == productID,
  );
  const [productComments, setProductsComments] = useState(productcomments);

  const [choosenFilter, setChoosenFilter] = useState({ label: "All" });

  const [filteredProductComments, setFilteredProductComments] =
    useState(productComments);

  const [filters, setFilter] = useState([
    {
      name: "All Reviews",
      arbName: "كل الآراء",
      count: productComments.length,
      isSelected: true,
      label: "All",
    },
    {
      name: "5 Stars",
      arbName: "5 نجوم",
      count: calcCountForEachRate(productComments)[4],
      isSelected: false,
      label: 5,
    },
    {
      name: "4 Stars",
      arbName: "4 نجوم",
      count: calcCountForEachRate(productComments)[3],
      isSelected: false,
      label: 4,
    },
    {
      name: "3 Stars",
      arbName: "3 نجوم",
      count: calcCountForEachRate(productComments)[2],
      isSelected: false,
      label: 3,
    },
    {
      name: "2 Stars",
      arbName: "2 نجوم",
      count: calcCountForEachRate(productComments)[1],
      isSelected: false,
      label: 2,
    },
    {
      name: "1 Stars",
      arbName: "1 نجوم",
      count: calcCountForEachRate(productComments)[0],
      isSelected: false,
      label: 1,
    },
  ]);
  useEffect(() => {
    async function updateComments() {
      if (choosenFilter.label === "All") {
        setFilteredProductComments(productComments);
      } else {
        setFilteredProductComments(
          productcomments.filter(
            (comment) => comment.rating === choosenFilter.label,
          ),
        );
      }
    }

    updateComments();
  }, [choosenFilter]);

  return (
    <>
      <motion.div
        className={`${CommentOnProductsContainerClass} ${dark && darkCommentOnProductsContainerClass} ${lang === "arb" && arbCommentOnProductsContainerClass}`}
        initial={{ opacity: 0, y: -170 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4 }}
      >
        <>
          <h1>
            <span>
              <i className="fa-regular fa-message"></i>
            </span>
            <span>
              {lang === "arb"
                ? "آراء المستخدمين"
                : "Customer Reviews Of The Product"}
            </span>
          </h1>
          <h4>
            {lang === "arb"
              ? "ماذا يقول المستخدمون الآخرون عن هذا المنتج"
              : "See What Other Customer Says Abourt This Product"}
          </h4>
        </>

        <div className={commentStaticsAddCommentContainerClass}>
          {showAddCommentForm && (
            <AddCommentForm
              setShowAddCommentForm={setShowAddCommentForm}
              showAddCommentForm={showAddCommentForm}
            />
          )}
          <ProductStatics
            productID={productID}
            calcCountForEachRate={calcCountForEachRate}
          />
          <AddComment
            setShowAddCommentForm={setShowAddCommentForm}
            showAddCommentForm={showAddCommentForm}
          />
        </div>
        <div className={commentsSectionContainerClass}>
          <CommentsFilter
            calcCountForEachRate={calcCountForEachRate}
            productComments={productComments}
            filters={filters}
            setFilter={setFilter}
            choosenFilter={choosenFilter}
            setChoosenFilter={setChoosenFilter}
          />
          <div className={commentsContainerClass}>
            {filteredProductComments.map((comment, index) => (
              <Comment key={index} comment={comment} />
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default CommentOnProducts;
