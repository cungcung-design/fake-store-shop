import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="text-center py-20">

      <h1 className="text-7xl font-bold">
        404
      </h1>

      <p className="text-gray-500 mt-5">
        Page Not Found
      </p>

      <Link
        to="/"
        className="inline-block mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg"
      >
        Go Home
      </Link>

    </div>
  );
}

export default NotFound;
