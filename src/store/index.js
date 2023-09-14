import { configureStore } from "@reduxjs/toolkit";
import CapsulesSlice from "./capsules-slice";
import ModalSlice from "./modal-slice";

const store = configureStore({
  reducer: {
    capsules: CapsulesSlice.reducer,
    modal: ModalSlice.reducer,
  },
});
export default store;
