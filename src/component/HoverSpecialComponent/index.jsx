import "./hoverSpecialComponent.css";
import { memo } from "react";
function HoverSpecialComponent(props) {
  const { name, image } = props.data;
  return (
    <div className="specialComponent">
      <div className="Image">
        <img src={`./images/special/${image}`} />
      </div>
      <div className="hoverSpecialText">{name}</div>
    </div>
  );
}
export default memo(HoverSpecialComponent);
