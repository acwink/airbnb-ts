import { createSlice } from "@reduxjs/toolkit";

export interface IDetailState {
  detailInfo: any;
}

const initialState: IDetailState = {
  detailInfo: {},
};

const detailSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {
    changeDetailInfoAction(state, { payload }) {
      state.detailInfo = payload;
    },
  },
});

export const { changeDetailInfoAction } = detailSlice.actions;

export default detailSlice.reducer;
