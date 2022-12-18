import { IRoom } from "@/types/shared";
import { AnyAction } from "redux";

import { ActionTypes } from "./constants";

interface IEntireState {
  currentPage: number;
  roomList: Array<IRoom>;
  totalCount: number;
  isLoading: boolean;
}

const initialState: IEntireState = {
  currentPage: 0,
  roomList: [],
  totalCount: 0,
  isLoading: false,
};

function reducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case ActionTypes.CHANGE_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    case ActionTypes.CHANGE_ROOM_LIST:
      return { ...state, roomList: action.roomList };
    case ActionTypes.CHANGE_TOTAL_COUNT:
      return { ...state, totalCount: action.totalCount };
    case ActionTypes.CHANGE_IS_LOADING:
      return { ...state, isLoading: action.isLoading };
    default:
      return state;
  }
}

export default reducer;
