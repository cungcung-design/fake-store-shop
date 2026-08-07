import { useDispatch, useSelector } from "react-redux";

import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../features/cart/cartSlice";

import CartSummary from "../components/CartSummary";

function Cart() {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.cart.items);

  if (items.length === 0) {
    return (
      <h2 className="text-center text-3xl">
        Cart is Empty
      </h2>
    );
  }

  return (
    <div>

      <h1 className="mb-8 text-4xl font-bold">
        Shopping Cart
      </h1>

      {items.map((item) => (
        <div
          key={item.id}
          className="mb-4 flex items-center gap-6 rounded-lg border p-4"
        >
          <img
            src={item.image}
            alt={item.title}
            className="h-24 w-24 object-contain"
          />

          <div className="flex-1">

            <h2>{item.title}</h2>

            <p>${item.price}</p>

          </div>

          <button
            onClick={() =>
              dispatch(decreaseQuantity(item.id))
            }
          >
            -
          </button>

          <span>{item.quantity}</span>

          <button
            onClick={() =>
              dispatch(increaseQuantity(item.id))
            }
          >
            +
          </button>

          <button
            onClick={() =>
              dispatch(removeFromCart(item.id))
            }
            className="rounded bg-red-500 px-4 py-2 text-white"
          >
            Remove
          </button>

        </div>
      ))}

      <CartSummary />

      <Link
        to="/checkout"
        className="mt-6 block bg-green-600 text-white text-center py-3 rounded-lg"
      >
        Proceed Checkout
      </Link>

    </div>
  );
}

export default Cart;
