import Indicator from "@/base-ui/indicator";
import React, { memo, useState } from "react";
import { DemoWrapper } from "./style";
const Demo = memo(() => {
  const names = ["abc", "cba", "nba", "bbb"];
  const [selectIndex, setSelectIndex] = useState(0);

  function toggleClickHandle(isNext: boolean) {
    let newIndex = isNext ? selectIndex + 1 : selectIndex - 1;
    newIndex = (newIndex + names.length) % names.length;
    setSelectIndex(newIndex);
  }
  return (
    <DemoWrapper>
      <div className="control">
        <button onClick={() => toggleClickHandle(false)}>上一个</button>
        <button onClick={() => toggleClickHandle(true)}>下一个</button>
      </div>
      <div className="list">
        <Indicator selectIndex={selectIndex}>
          {names.map((item) => {
            return <button key={item}>{item}</button>;
          })}
        </Indicator>
      </div>
    </DemoWrapper>
  );
});

export default Demo;
