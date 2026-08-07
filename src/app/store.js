import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import authReducer from "../features/auth/authSlice";
import orderReducer from "../features/orders/orderSlice";
import themeReducer from "../features/theme/themeSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
    orders: orderReducer,
    theme: themeReducer,
  },
});
