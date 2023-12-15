import "./sizeComponent.css";
function SizeComponent(props) {
  return (
    <button className="size">
      <span>{props.size}</span>
    </button>
  );
}
export default SizeComponent;
