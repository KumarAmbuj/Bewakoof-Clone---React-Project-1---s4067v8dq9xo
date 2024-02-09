import "./accordionInnerContainer.css";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { memo } from "react";
function AccordionInnerContainer(props) {
  const arr = props.data;
  const [searchParams, setSearchParams] = useSearchParams();
  let obj = JSON.parse(searchParams.get("filter"));
  console.log();
  let search = JSON.parse(searchParams.get("search"));
  // console.log(search);
  const navigate = useNavigate();
  function handleClick(val) {
    //console.log(val);
    if (obj[val.type]) {
      delete obj[val.type];
      obj = { ...obj, ...val.filter };
    } else {
      obj = { ...obj, ...val.filter };
    }
    navigate(`/product-details?&filter=${JSON.stringify(obj)}`);
  }
  return (
    <div className="accordionInnerContainer">
      {arr.map((val, index) => {
        return (
          <div
            className="subcategoryName"
            onClick={() => handleClick(val)}
            key={index}
          >
            {val.name}
          </div>
        );
      })}
    </div>
  );
}
export default memo(AccordionInnerContainer);
