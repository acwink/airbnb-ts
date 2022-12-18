import {
  getHomeDiscountData,
  getHomeGoodPriceData,
  getHomeHighScoreData,
  getHomeLongforData,
  getHomePlusData,
  getHomeRecommendData,
} from "@/services";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { IRes, IResForDest } from "@/types/request";

import { IRoom } from "@/types/shared";
import { IDestAddress, ILongforItem } from "@/types/home";
import { Nullable } from "@/types/tool";

export const fetchHomeDataAction = createAsyncThunk(
  "fetchData",
  (payload, { dispatch }) => {
    getHomeGoodPriceData().then((res) => {
      dispatch(changeGoodPriceInfoAction(res.data));
    });

    getHomeHighScoreData().then((res) => {
      dispatch(changeHighScoreInfoAction(res.data));
    });

    getHomeDiscountData().then((res) => {
      dispatch(changeDiscountInfoAction(res.data));
    });

    getHomeRecommendData().then((res) => {
      dispatch(changeRecommendInfoAction(res.data));
    });

    getHomeLongforData().then((res) => {
      dispatch(changeLongforInfoAction(res.data));
    });

    getHomePlusData().then((res) => {
      dispatch(changePlusInfoAction(res.data));
    });
  }
);

interface IHomeState {
  goodPriceInfo: IRes<IRoom>;
  highScoreInfo: IRes<IRoom>;
  discountInfo: IResForDest<IDestAddress, IRoom>;
  recommendInfo: IResForDest<IDestAddress, IRoom>;
  longforInfo: IRes<ILongforItem>;
  plusInfo: IRes<IRoom>;
}

const initialState: Nullable<IHomeState> = {
  goodPriceInfo: null,
  highScoreInfo: null,
  discountInfo: null,
  recommendInfo: null,
  longforInfo: null,
  plusInfo: null,
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    changeGoodPriceInfoAction(
      state,
      { payload }: PayloadAction<IRes<IRoom> | null>
    ) {
      state.goodPriceInfo = payload;
    },
    changeHighScoreInfoAction(
      state,
      { payload }: PayloadAction<IRes<IRoom> | null>
    ) {
      state.highScoreInfo = payload;
    },
    changeDiscountInfoAction(
      state,
      { payload }: PayloadAction<IResForDest<IDestAddress, IRoom> | null>
    ) {
      state.discountInfo = payload;
    },
    changeRecommendInfoAction(
      state,
      { payload }: PayloadAction<IResForDest<IDestAddress, IRoom> | null>
    ) {
      state.recommendInfo = payload;
    },
    changeLongforInfoAction(
      state,
      { payload }: PayloadAction<IRes<ILongforItem> | null>
    ) {
      state.longforInfo = payload;
    },
    changePlusInfoAction(
      state,
      { payload }: PayloadAction<IRes<IRoom> | null>
    ) {
      state.plusInfo = payload;
    },
  },
  extraReducers: {},
});

export const {
  changeGoodPriceInfoAction,
  changeHighScoreInfoAction,
  changeDiscountInfoAction,
  changeRecommendInfoAction,
  changeLongforInfoAction,
  changePlusInfoAction,
} = homeSlice.actions;

export default homeSlice.reducer;
