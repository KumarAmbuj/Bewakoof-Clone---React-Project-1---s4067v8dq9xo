import "./accordionInnerContainer.css";
import { Link } from "react-router-dom";
function AccordionInnerContainer(props) {
  const arr = props.data;
  return (
    <div className="accordionInnerContainer">
      {/* <div className="subcategoryName">Bewakoof</div>
      <div className="subcategoryName">Bewakoof</div>
      <div className="subcategoryName">Bewakoof</div>
      <div className="subcategoryName">Bewakoof</div>
      <div className="subcategoryName">Bewakoof</div>
      <div className="subcategoryName">Bewakoof</div>
      <div className="subcategoryName">Bewakoof</div>
      <div className="subcategoryName">Bewakoof</div> */}
      {arr.map((val, index) => {
        return (
          <Link
            to={`/product-details?search=${JSON.stringify(
              val.search
            )}&filter=${JSON.stringify(val.filter)}`}
            className="hoverMenuItem"
            key={index}
            style={{ listStyle: "none", textDecoration: "none" }}
          >
            <div className="subcategoryName">{val.name}</div>
          </Link>
        );
      })}
    </div>
  );
}
export default AccordionInnerContainer;
