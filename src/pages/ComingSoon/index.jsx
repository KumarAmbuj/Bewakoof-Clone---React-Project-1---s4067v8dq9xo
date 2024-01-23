import { useEffect } from "react";
import "./comingSoon.css";
function ComingSoon() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="comingSoonContainer">
      <div className="comingSoonImage">
        <img src="https://lh3.googleusercontent.com/proxy/qKxWo5ubofjwkMOAiQuivligDcNLuGFL4DjuNi5KAVIaPbA5PyR6rCuPo2H73zABg62wwl52iwf1iW46jz3fUiJp0w" />
      </div>
    </div>
  );
}
export default ComingSoon;
