import { getEntireRoomList } from "@/services/modules/entire";
import { ActionTypes } from "./constants";
import { IRoom } from "@/types/shared";
import { Dispatch } from "@reduxjs/toolkit";

export const changeCurrentPageAction = (currentPage: number) => ({
  type: ActionTypes.CHANGE_CURRENT_PAGE,
  currentPage,
});

export const changeRoomListAction = (roomList: Array<IRoom>) => ({
  type: ActionTypes.CHANGE_ROOM_LIST,
  roomList,
});

export const changeTotalCountAction = (totalCount: number) => ({
  type: ActionTypes.CHANGE_TOTAL_COUNT,
  totalCount,
});

export const changeIsLoadingAction = (isLoading: boolean) => ({
  type: ActionTypes.CHANGE_IS_LOADING,
  isLoading,
});

export const fetchRoomListAction = (extraPage = 0) => {
  return async (dispatch: Dispatch) => {
    dispatch(changeIsLoadingAction(true));
    const currentPage = extraPage;
    const res = await getEntireRoomList(currentPage * 20);
    const { totalCount, list } = res.data;
    dispatch(changeIsLoadingAction(false));
    // 获取新数据，储存
    dispatch(changeTotalCountAction(totalCount));
    dispatch(changeRoomListAction(list));
    dispatch(changeCurrentPageAction(extraPage));
  };
};
