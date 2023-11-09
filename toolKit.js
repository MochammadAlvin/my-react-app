import toolKit from "@reduxjs/toolkit";

const { configureStore, createAction, createReducer } = toolKit;

// const initialState = {
//   cart: [],
// };

const addToCart = createAction("ADD_TO_CART");

const cartReducer = createReducer([], (builder) => {
  builder.addCase(addToCart, (state, action) => {
    state.push(action.payload);
  });
});

const login = createAction("CREATE_SESSIONS");

const loginReducer = createReducer({ status: false }, (builder) => {
  builder.addCase(login, (state, action) => {
    state.status = true;
  });
});

const store = configureStore({
  // reducer: cartReducer,
  reducer: {
    login: loginReducer,
    cart: cartReducer,
  },
});

console.log("oncreate store : ", store.getState());

store.subscribe(() => {
  console.log("STORE_CHANGE : ", store.getState());
});

store.dispatch(addToCart({ id: 1, qty: 20 }));
store.dispatch(login());
