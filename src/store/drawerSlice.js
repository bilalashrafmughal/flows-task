import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  drawerWidth: 240,
};
const drawerSlice = createSlice({
  name: "drawer/switch",
  initialState,
  reducers: {
    setOpen: (state, { payload }) => {
      state.open = payload;
      return;
    },
  },
});
export const getDrawer = (state) => state.drawer;
export const { setOpen } = drawerSlice.actions;
export default drawerSlice.reducer;
