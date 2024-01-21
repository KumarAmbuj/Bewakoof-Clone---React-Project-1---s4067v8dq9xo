import "./categoryCard.css";
import { memo } from "react";
function CategoryCard(props) {
  const { name, image } = props.data;
  return (
    <>
      <div className="categoryCard">
        <div className="cardImage">
          <img src={`./images/${image}`} />
        </div>
        <div className="cardText">{name}</div>
      </div>
    </>
  );
}
export default memo(CategoryCard);
