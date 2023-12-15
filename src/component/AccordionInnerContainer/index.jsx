import "./accordionInnerContainer.css";
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
          <div className="subcategoryName" key={index}>
            {val}
          </div>
        );
      })}
    </div>
  );
}
export default AccordionInnerContainer;
