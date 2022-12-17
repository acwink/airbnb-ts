import React, { memo, ReactNode, useEffect, useRef } from "react";
import { IndicatorWrapper } from "./style";

export interface IndicatorProps {
  selectIndex: number;
  children: ReactNode;
}

const Indicator: React.FC<IndicatorProps> = memo((props) => {
  const { selectIndex = 0 } = props;
  const contentRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (contentRef.current !== null) {
      // 获取对应selectIndex对应的item

      const selectItemEl = contentRef.current.children[selectIndex] as any;
      const itemLeft = selectItemEl.offsetLeft;
      const itemWidth = selectItemEl.clientWidth;

      // 2. content的宽度
      const contentWidth = contentRef.current.clientWidth;
      const contentScroll = contentRef.current.scrollWidth;

      // 3.获取selectIndex 要滚动的距离
      let distance = itemLeft + itemWidth * 0.5 - contentWidth * 0.5;

      // 左边特殊情况
      if (distance < 0) distance = 0;

      const totalDistance = contentScroll - contentWidth;
      // 右边特殊情况
      if (distance > totalDistance) distance = totalDistance;

      // 改变位置
      contentRef.current.style.transform = `translate(${-distance}px)`;
    }
  }, [selectIndex]);

  return (
    <IndicatorWrapper>
      <div className="i-content" ref={contentRef}>
        {props.children}
      </div>
    </IndicatorWrapper>
  );
});

export default Indicator;
