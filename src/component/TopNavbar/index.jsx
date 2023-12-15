import "./topNavbar.css";
function TopNavbar() {
  return (
    <>
      <div className="parent">
        <div className="child1">
          <ul>
            <li>Offers </li>
            <li>Fanbook </li>
            <li>Download App </li>
            <li>Tribe Membership </li>
          </ul>
        </div>
        <div className="child2">
          <ul>
            <li>Contact Us </li>
            <li>Track Order </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default TopNavbar;
