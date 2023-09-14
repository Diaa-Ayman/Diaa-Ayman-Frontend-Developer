import { createSlice } from "@reduxjs/toolkit";

const CapsulesSlice = createSlice({
  name: "capsules",
  initialState: {
    allCapsules: [],
    filteredCapsules: [],
    paginator: [],
  },
  reducers: {
    getAllCapsules(state, action) {
      state.allCapsules = action.payload;
    },
    getFilteredCapsules(state, action) {
      state.filteredCapsules = action.payload;
    },
    getPaginator(state, action) {
      state.paginator = action.payload;
    },
  },
});

export const { getAllCapsules, getFilteredCapsules, getPaginator } =
  CapsulesSlice.actions;
export default CapsulesSlice;
