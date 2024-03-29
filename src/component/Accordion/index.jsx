import { useState, memo } from "react";
import "./accordion.css";
import AccordionInnerContainer from "../AccordionInnerContainer";

import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";

function Accordion(props) {
  const { name, subCategoryList } = props.data;

  const [show, setShow] = useState(false);
  return (
    <div>
      <div
        className="accordionCategory"
        onClick={() => {
          setShow(!show);
        }}
      >
        <div className="categoryType" style={{ marginTop: "7px" }}>
          {name}
        </div>
        <div className="arrow">{!show ? <FaAngleDown /> : <FaAngleUp />}</div>
      </div>
      {show ? <AccordionInnerContainer data={subCategoryList} /> : ""}
      <div className="accordionBorderLine"></div>
    </div>
  );
}
export default memo(Accordion);
