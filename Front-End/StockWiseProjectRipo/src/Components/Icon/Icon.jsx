// Import Style
import { iconContainerClass } from "./Icon.module.css";

function Icon({ iconSrc }) {
  return (
    <>
      <div className={iconContainerClass}>
        <img src={iconSrc} />
      </div>
    </>
  );
}

export default Icon;
