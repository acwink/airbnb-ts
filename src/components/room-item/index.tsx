import React, { memo, useRef, useState } from "react";
import { ItemWrapper } from "./style";
import Rating from "@mui/material/Rating";

import { Carousel } from "antd";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import Indicator from "@/base-ui/indicator";
import classNames from "classnames";
import { IRoom } from "@/types/shared";
import { MouseEvent } from "react";
interface IRoomItemProps {
  itemData: IRoom;
  itemWidth?: `${number}%`;
  itemClick?: (item: IRoom) => void;
}

const RoomItem = memo((props: IRoomItemProps) => {
  const { itemData, itemWidth = "25%", itemClick } = props;
  const sliderRef = useRef<any>(null);
  const [selectIndex, setSelectIndex] = useState(0);
  function controlClickHandle(
    event: MouseEvent<HTMLDivElement>,
    isRight: boolean
  ) {
    // 静止冒泡
    event.stopPropagation();
    if (sliderRef.current !== null) {
      isRight ? sliderRef.current.next() : sliderRef.current.prev();
      let newIndex = isRight ? selectIndex + 1 : selectIndex - 1;
      const length = itemData.picture_urls.length;
      newIndex = (newIndex + length) % length;
      setSelectIndex(newIndex);
    }
  }

  const pictureElement = (
    <div className="cover">
      <img src={itemData.picture_url} alt="" />
    </div>
  );

  const sliderElement = (
    <div className="swiper">
      <div className="control">
        <div className="btn left" onClick={(e) => controlClickHandle(e, false)}>
          <IconArrowLeft width={30} height={30} />
        </div>
        <div className="btn right" onClick={(e) => controlClickHandle(e, true)}>
          <IconArrowRight width={30} height={30} />
        </div>
      </div>
      <div className="indicator">
        <Indicator selectIndex={selectIndex}>
          {itemData.picture_urls?.map((item, index) => {
            return (
              <div className="dot-item" key={item}>
                <span
                  className={classNames("dot", {
                    active: index === selectIndex,
                  })}
                >
                  .
                </span>
              </div>
            );
          })}
        </Indicator>
      </div>
      <Carousel dots={false} ref={sliderRef}>
        {itemData.picture_urls?.map((item) => {
          return (
            <div className="cover" key={item}>
              <img src={item} alt="" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );

  function itemClickHandle() {
    if (itemClick) itemClick(itemData);
  }

  return (
    <ItemWrapper
      verifyColor={itemData?.verify_info?.text_color ?? "#39576a"}
      itemWidth={itemWidth}
      onClick={itemClickHandle}
    >
      <div className="inner">
        {itemData.picture_urls ? sliderElement : pictureElement}
        <div className="desc">{itemData.verify_info?.messages.join("·")}</div>
        <div className="name">{itemData.name}</div>
        <div className="price">￥{itemData.price}/晚</div>
        <div className="bottom">
          <Rating
            readOnly
            size="small"
            defaultValue={5}
            value={itemData.star_rating}
            precision={0.1}
            sx={{ fontSize: "12px", color: itemData.star_rating_color }}
          ></Rating>
          <span className="count">{itemData.reviews_count}</span>
          {itemData.bottom_info && (
            <span className="extra">·{itemData.bottom_info?.content}</span>
          )}
        </div>
      </div>
    </ItemWrapper>
  );
});

export default RoomItem;
