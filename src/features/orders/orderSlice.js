import { createSlice } from "@reduxjs/toolkit";

const savedOrders = localStorage.getItem("orders");

const initialState = {
  orders: savedOrders ? JSON.parse(savedOrders) : [],
};

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addOrder(state, action) {
      state.orders.push(action.payload);
      localStorage.setItem(
        "orders",
        JSON.stringify(state.orders)
      );
    },
    clearOrders(state) {
      state.orders = [];
      localStorage.removeItem("orders");
    },
  },
});

export const { addOrder, clearOrders } = orderSlice.actions;

export default orderSlice.reducer;
