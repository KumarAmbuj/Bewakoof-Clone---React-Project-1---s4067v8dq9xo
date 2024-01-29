import { useEffect } from "react";
import "./comingSoon.css";
function ComingSoon() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="comingSoonContainer">
      <div className="comingSoonImage">
        <img src="https://cdn.dribbble.com/users/1147690/screenshots/6386072/food-street3.gif" />
      </div>
    </div>
  );
}
export default ComingSoon;
