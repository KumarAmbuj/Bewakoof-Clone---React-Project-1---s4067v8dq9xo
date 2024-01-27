import "./hoverSpecialComponent.css";
import { memo } from "react";
import { Link } from "react-router-dom";
function HoverSpecialComponent(props) {
  const { name, image } = props.data;
  return (
    <div className="specialComponent">
      <div className="Image">
        <img src={`/images/special/${image}`} />
      </div>
      <div className="hoverSpecialText">
        <Link to="/coming-soon">{name}</Link>
      </div>
    </div>
  );
}
export default memo(HoverSpecialComponent);
