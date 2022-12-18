import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import { fetchRoomListAction } from "@/store/modules/entire/actionCreators";
import classNames from "classnames";
import React, { memo } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { PaginationWrapper } from "./style";
import { RootState, AppDispatch } from "../../../../store/index";

const EntirePagination = memo(() => {
  const { totalCount, currentPage } = useSelector(
    (state: RootState) => ({
      totalCount: state.entire.totalCount,
      currentPage: state.entire.currentPage,
      roomList: state.entire.roomList,
    }),
    shallowEqual
  );

  const totalPage = Math.ceil(totalCount / 20);

  // 事件处理的逻辑
  const dispatch = useDispatch<AppDispatch>();
  function pageChangeHandle(_: any, pageCount: number) {
    window.scrollTo(0, 0);
    dispatch(fetchRoomListAction(pageCount - 1));
  }

  function controlClickHandle(isRight: boolean) {
    const newPage = isRight ? currentPage + 1 : currentPage - 1;
    pageChangeHandle(undefined, newPage + 1);
  }

  return (
    <PaginationWrapper>
      <div className="left">
        <div className="p-num" onClick={() => controlClickHandle(false)}>
          <IconArrowLeft />
        </div>
      </div>
      <div className="center">
        {Array.from({ length: totalPage })
          .fill(0)
          .map((_, index) => {
            return (
              <div
                className={classNames("p-num", {
                  active: currentPage === index,
                })}
                key={index}
                onClick={(e) => pageChangeHandle(e, index + 1)}
              >
                {index + 1}
              </div>
            );
          })}
      </div>
      <div className="right">
        <div className="p-num" onClick={() => controlClickHandle(true)}>
          <IconArrowRight />
        </div>
      </div>
    </PaginationWrapper>
  );
});

export default EntirePagination;
