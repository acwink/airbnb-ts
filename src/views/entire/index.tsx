import { fetchRoomListAction } from "@/store/modules/entire/actionCreators";
import React, { memo, useEffect } from "react";
import { useDispatch } from "react-redux";
import EntireFilter from "./c-cpns/entire-filter";
import EntirePagination from "./c-cpns/entire-pagination";
import EntrieRooms from "./c-cpns/entire-rooms";
import { EntireWrapper } from "./style";
import { AppDispatch } from "../../store/index";

const Entire = memo(() => {
  // 发送网络请求，获取数据，并保存当前页面等等
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchRoomListAction());
  }, [dispatch]);
  return (
    <EntireWrapper>
      <EntireFilter />
      <EntrieRooms />
      <EntirePagination />
    </EntireWrapper>
  );
});

export default Entire;
