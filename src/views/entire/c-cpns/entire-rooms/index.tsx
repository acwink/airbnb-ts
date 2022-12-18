import RoomItem from "@/components/room-item";
import { changeDetailInfoAction } from "@/store/modules/detail";
// import PropTypes from "prop-types";
import React, { memo, useCallback } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RoomsWrapper } from "./style";
import { RootState } from "@/store/index";
import { IRoom } from "../../../../types/shared";

const EntrieRooms = memo(() => {
  // 从 redux 中获取roomList数据
  const { roomList, totalCount, isLoading } = useSelector(
    (state: RootState) => ({
      roomList: state.entire.roomList,
      totalCount: state.entire.totalCount,
      isLoading: state.entire.isLoading,
    }),
    shallowEqual
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const itemClickHandle = useCallback(
    (item: IRoom) => {
      dispatch(changeDetailInfoAction(item));
      navigate("/detail");
    },
    [navigate, dispatch]
  );
  return (
    <RoomsWrapper>
      <h2 className="title">共{totalCount}多处住所</h2>
      <div className="list">
        {roomList.map((item: IRoom) => {
          return (
            <RoomItem
              itemData={item}
              key={item.id}
              itemWidth="20%"
              itemClick={itemClickHandle}
            />
          );
        })}
      </div>

      {isLoading && <div className="cover"></div>}
    </RoomsWrapper>
  );
});

export default EntrieRooms;
