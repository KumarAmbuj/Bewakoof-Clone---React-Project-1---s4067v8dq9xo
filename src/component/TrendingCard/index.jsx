import "./trendingCard.css";
import { memo } from "react";
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
