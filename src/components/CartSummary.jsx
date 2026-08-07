import { useSelector } from "react-redux";

import { selectCartSubtotal } from "../features/cart/cartSelectors";

function CartSummary() {
  const subtotal = useSelector(selectCartSubtotal);

  const tax = subtotal * 0.1;

  const shipping = subtotal > 100 ? 0 : 10;

  const total = subtotal + tax + shipping;

  return (
    <div className="rounded-xl border p-6">
      <h2 className="text-2xl font-bold mb-5">
        Order Summary
      </h2>

      <div className="flex justify-between">
        <span>Subtotal</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>

      <div className="flex justify-between">
        <span>Tax</span>
        <span>${tax.toFixed(2)}</span>
      </div>

      <div className="flex justify-between">
        <span>Shipping</span>
        <span>{shipping === 0 ? "FREE" : `$${shipping}`}</span>
      </div>

      <hr className="my-4" />

      <div className="flex justify-between text-xl font-bold">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>
    </div>
  );
}

export default CartSummary;
