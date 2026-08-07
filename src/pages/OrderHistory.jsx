import { useSelector } from "react-redux";

function OrderHistory() {
  const orders = useSelector((state) => state.orders.orders);

  if (orders.length === 0) {
    return (
      <h1 className="text-center text-3xl">
        No Orders Yet
      </h1>
    );
  }

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">
        Order History
      </h1>

      <div className="space-y-6">
        {orders.map((order) => (
          <div
            key={order.id}
            className="border rounded-xl p-6 shadow"
          >
            <div className="flex justify-between">
              <h2 className="text-xl font-bold">
                Order #{order.id}
              </h2>
              <span>{order.status}</span>
            </div>

            <p>
              Date: {order.date}
            </p>

            <p>
              Customer: {order.customer.name}
            </p>

            <h3 className="mt-4 font-bold">
              Products
            </h3>

            {order.products.map((product) => (
              <div
                key={product.id}
                className="flex justify-between"
              >
                <span>{product.title}</span>
                <span>x {product.quantity}</span>
              </div>
            ))}

            <h2 className="mt-5 text-2xl font-bold text-blue-600">
              Total: ${order.total.toFixed(2)}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrderHistory;
