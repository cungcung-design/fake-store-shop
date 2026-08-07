import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { addOrder } from "../features/orders/orderSlice";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const items = useSelector((state) => state.cart.items);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(checkoutSchema),
  });

  function submitOrder(data) {
    const order = {
      id: Date.now(),
      customer: data,
      products: items,
      total: items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      ),
      status: "Processing",
      date: new Date().toLocaleDateString(),
    };

    dispatch(addOrder(order));
    dispatch(clearCart());
    navigate("/orders");
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">
        Checkout
      </h1>

      <form
        onSubmit={handleSubmit(submitOrder)}
        className="space-y-5"
      >
        <input
          {...register("name")}
          placeholder="Full Name"
          className="w-full border p-3 rounded"
        />
        <p className="text-red-500">
          {errors.name?.message}
        </p>

        <input
          {...register("email")}
          placeholder="Email"
          className="w-full border p-3 rounded"
        />
        <p className="text-red-500">
          {errors.email?.message}
        </p>

        <input
          {...register("phone")}
          placeholder="Phone"
          className="w-full border p-3 rounded"
        />
        <p className="text-red-500">
          {errors.phone?.message}
        </p>

        <textarea
          {...register("address")}
          placeholder="Address"
          className="w-full border p-3 rounded"
        />
        <p className="text-red-500">
          {errors.address?.message}
        </p>

        <input
          {...register("city")}
          placeholder="City"
          className="w-full border p-3 rounded"
        />

        <input
          {...register("country")}
          placeholder="Country"
          className="w-full border p-3 rounded"
        />

        <input
          {...register("zipCode")}
          placeholder="Zip Code"
          className="w-full border p-3 rounded"
        />

        <button
          className="w-full bg-green-600 text-white py-3 rounded-lg"
        >
          Place Order
        </button>
      </form>
    </div>
  );
}

export default Checkout;
