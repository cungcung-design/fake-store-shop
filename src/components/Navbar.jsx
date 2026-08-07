import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";
import DarkModeToggle from "./DarkModeToggle";

function Navbar() {
  const dispatch = useDispatch();

  const navClass = ({ isActive }) =>
    isActive ? "text-blue-400 font-semibold" : "hover:text-blue-400";

  const items = useSelector((state) => state.cart.items);

  const totalItems = items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const user = useSelector((state) => state.auth.user);

  return (
    <nav className="bg-slate-900 text-white">

      <div className="container mx-auto flex justify-between items-center p-4">

        <Link
          to="/"
          className="text-2xl font-bold"
        >
          FakeStore
        </Link>

        <div className="flex gap-6">

          <NavLink
            to="/"
            className={navClass}
          >
            Home
          </NavLink>

          <NavLink
            to="/orders"
            className={navClass}
          >
            Orders
          </NavLink>

          <NavLink
            to="/login"
            className={navClass}
          >
            Login
          </NavLink>

          <NavLink
            to="/cart"
            className="relative"
          >
            <FaShoppingCart size={24} />

            <span
              className="absolute
              -top-2
              -right-3
              bg-red-500
              text-xs
              rounded-full
              px-2
              text-white"
            >
              {totalItems}
            </span>

          </NavLink>

          <DarkModeToggle />

          {user && (
            <button
              onClick={() => dispatch(logout())}
              className="text-red-400"
            >
              Logout
            </button>
          )}

        </div>

      </div>

    </nav>
  );
}

export default Navbar;
