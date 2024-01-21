import "./sizeComponent.css";
import { memo } from "react";
function SizeComponent(props) {
  return (
    <button className="size">
      <span>{props.size}</span>
    </button>
  );
}
export default memo(SizeComponent);
