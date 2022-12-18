import React, { memo } from "react";
import { ItemWrapper } from "./style";
import { ILongforItem } from "@/types/home";

interface ILongforItemProps {
  itemData: ILongforItem;
}

const LongforItem = memo((props: ILongforItemProps) => {
  const { itemData } = props;
  return (
    <ItemWrapper>
      <div className="inner">
        <div className="item-info">
          <img className="cover" src={itemData.picture_url} alt="" />
          <div className="bg-cover"></div>
          <div className="info">
            <div className="city">{itemData.city}</div>
            <div className="price">{itemData.price}</div>
          </div>
        </div>
      </div>
    </ItemWrapper>
  );
});

export default LongforItem;
