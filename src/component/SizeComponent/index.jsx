import { useSearchParams } from "react-router-dom";
import "./sizeComponent.css";
import { memo, useState } from "react";
function SizeComponent(props) {
  //console.log(props);
  return (
    <button
      className={`size ${props.index === props.state ? "active" : ""}`}
      onClick={props.onclick}
    >
      <span>{props.size}</span>
    </button>
  );
}
export default memo(SizeComponent);
