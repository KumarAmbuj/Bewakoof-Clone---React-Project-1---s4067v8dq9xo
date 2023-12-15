import CartEmpty from "../../component/CartEmpty";
import CartFull from "../../component/CartFull";
import "./cart.css";
function Cart() {
  return (
    <div>
      {/* <CartEmpty /> */}
      <CartFull />
    </div>
  );
}
export default Cart;
