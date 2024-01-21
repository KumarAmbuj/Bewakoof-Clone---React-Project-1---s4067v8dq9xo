import "./loader.css";

import { memo } from "react";
function Loader() {
  return (
    <div className="loader">
      <img src="https://designerbugs.in/storage/app/public/company/2022-10-28-635c1c160515b.png" />
    </div>
  );
}
export default memo(Loader);
