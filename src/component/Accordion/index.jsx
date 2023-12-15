import { useState } from "react";
import "./accordion.css";
import AccordionInnerContainer from "../AccordionInnerContainer";

import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";

function Accordion(props) {
  const { name, subCategoryList } = props.data;
  console.log(name, subCategoryList);
  const [show, setShow] = useState(false);
  return (
    <div>
      <div
        className="accordionCategory"
        onClick={() => {
          setShow(!show);
        }}
      >
        <div className="categoryType">{name}</div>
        <div className="arrow">{!show ? <FaAngleDown /> : <FaAngleUp />}</div>
      </div>
      {show ? <AccordionInnerContainer data={subCategoryList} /> : ""}
      <div className="borderLine"></div>
    </div>
  );
}
export default Accordion;
