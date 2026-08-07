import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

import useProduct from "../hooks/useProduct";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";

function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const {
    data: product,
    isLoading,
    isError,
    error,
  } = useProduct(id);

  if (isLoading) return <LoadingSpinner />;

  if (isError)
    return (
      <ErrorMessage
        message={error.message}
      />
    );

  return (
    <div className="grid gap-10 md:grid-cols-2">

      <img
        src={product.image}
        alt={product.title}
        className="h-96 w-full object-contain"
      />

      <div>

        <h1 className="text-4xl font-bold">
          {product.title}
        </h1>

        <p className="mt-5 text-gray-600">
          {product.description}
        </p>

        <h2 className="mt-6 text-3xl font-bold text-blue-600">
          ${product.price}
        </h2>

        <button
          onClick={() => dispatch(addToCart(product))}
          className="mt-8 rounded-lg bg-blue-600 px-8 py-3 text-white hover:bg-blue-700"
        >
          Add To Cart
        </button>

      </div>

    </div>
  );
}

export default ProductDetail;
