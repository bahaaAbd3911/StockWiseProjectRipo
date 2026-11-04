// Import Style
import {
  imagesContainerClass,
  smallImagesContainerClass,
  imageClass,
  activeImageClass,
} from "./ProductDetails.module.css";

function ImagesContainer({ productData, setActicveImage, activeImage }) {
  return (
    <>
      <div className={imagesContainerClass}>
        <div>
          <img src={activeImage} />
        </div>
        <div className={smallImagesContainerClass}>
          {productData.images.map((image, index) => (
            <div
              className={`${imageClass} ${activeImage === productData.images[index] ? activeImageClass : ""}`}
              key={index}
              onClick={() => {
                setActicveImage(productData.images[index]);
              }}
            >
              <img src={productData.images[index]} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ImagesContainer;
