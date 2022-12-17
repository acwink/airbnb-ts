import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import React, { memo, useEffect, useState, useRef } from "react";
import { ViewWrapper } from "./style";

interface ScrollViewProps {
  children: React.ReactNode;
}

const ScrollView = memo((props: ScrollViewProps) => {
  // 定义内部状态
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);
  const [posIndex, setPosIndex] = useState(0);
  const totalDistanceRef = useRef<number>();
  // 组件渲染完毕，判断是否显示右侧按钮
  const scrollContentRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (scrollContentRef.current !== null) {
      // 一共可滚动的宽度
      const scrollWidth = scrollContentRef.current.scrollWidth;
      // 本身占据的宽度
      const clientWidth = scrollContentRef.current.clientWidth;

      const totalDistance = scrollWidth - clientWidth;
      totalDistanceRef.current = totalDistance;

      setShowRight(totalDistance > 0);
    }
  }, [props.children]);

  // 事件处理
  function controlClickHandle(isRight: boolean) {
    const newIndex = posIndex + (isRight ? 1 : -1);
    const newEl = scrollContentRef?.current?.children[newIndex] as any;
    const newElOffsetLeft = newEl.offsetLeft;
    if (scrollContentRef.current !== null)
      scrollContentRef.current.style.transform = `translate(-${newElOffsetLeft}px)`;
    setPosIndex(newIndex);

    // 是否显示右边的按钮
    setShowRight(totalDistanceRef.current! > newElOffsetLeft);
    setShowLeft(newElOffsetLeft > 0);
  }

  return (
    <ViewWrapper>
      {showLeft && (
        <div className="control left" onClick={() => controlClickHandle(false)}>
          <IconArrowLeft />
        </div>
      )}
      {showRight && (
        <div className="control right" onClick={() => controlClickHandle(true)}>
          <IconArrowRight />
        </div>
      )}

      <div className="scroll">
        <div className="scroll-content" ref={scrollContentRef}>
          {props.children}
        </div>
      </div>
    </ViewWrapper>
  );
});

export default ScrollView;
