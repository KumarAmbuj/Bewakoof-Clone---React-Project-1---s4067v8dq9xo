import "./hoverSpecialComponent.css";
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
export default HoverSpecialComponent;
