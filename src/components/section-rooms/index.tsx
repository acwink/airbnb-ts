import React, { memo } from "react";
import RoomItem from "../room-item";
import { RoomsWrapper } from "./style";
import { IRoom } from "../../types/shared";

interface ISectionRoomsProps {
  roomList?: Array<IRoom>;
  itemWidth?: `${number}%`;
}

const SectionRooms = memo((props: ISectionRoomsProps) => {
  const { roomList = [], itemWidth } = props;
  return (
    <RoomsWrapper>
      {roomList.slice(0, 8).map((item: IRoom) => {
        return <RoomItem itemData={item} key={item.id} itemWidth={itemWidth} />;
      })}
    </RoomsWrapper>
  );
});

export default SectionRooms;
