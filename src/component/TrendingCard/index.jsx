import "./trendingCard.css";
import { memo } from "react";
import { Link } from "react-router-dom";
function TrendingCard(props) {
  const { name, image } = props.data;
  return (
    <div className="trendingCard">
      <div className="trendingImage">
        <img src={`./images/${image}`} />
      </div>
    </div>
  );
}
export default memo(TrendingCard);
