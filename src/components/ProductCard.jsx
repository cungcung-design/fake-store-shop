import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

function ProductCard({ product }) {
  return (
    <div className="rounded-xl border bg-white dark:bg-slate-800 dark:text-white p-4 shadow transition hover:shadow-xl">

      <img
        src={product.image}
        alt={product.title}
        className="mx-auto h-52 object-contain"
      />

      <h2 className="mt-4 line-clamp-2 font-semibold">
        {product.title}
      </h2>

      <div className="mt-3 flex items-center gap-2">

        <FaStar className="text-yellow-500" />

        <span>
          {product.rating.rate}
        </span>

      </div>

      <p className="mt-2 text-2xl font-bold text-blue-600">
        ${product.price}
      </p>

      <Link
        to={`/product/${product.id}`}
        className="mt-4 block rounded-lg bg-blue-600 py-2 text-center text-white"
      >
        View Details
      </Link>

    </div>
  );
}

export default ProductCard;
