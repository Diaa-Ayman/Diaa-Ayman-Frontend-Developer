import { createSlice } from "@reduxjs/toolkit";

const ModalSlice = createSlice({
  name: "ui",
  initialState: {
    toggleModal: false,
    capSerial: "",
  },
  reducers: {
    showModal(state, action) {
      state.toggleModal = true;
      state.capSerial = action.payload;
    },
    hideModal(state) {
      state.toggleModal = false;
      state.capSerial = "";
    },
  },
});

export const { showModal, hideModal } = ModalSlice.actions;
export default ModalSlice;
