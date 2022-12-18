import ScrollView from "@/base-ui/scroll-view";
import classNames from "classnames";
import React, { memo, useState } from "react";
import { TabsWrapper } from "./style";

interface ISectionTabsProps {
  tabNames?: Array<string>;
  tabClick: (index: number, item: any) => void;
}

const SectionTabs = memo((props: ISectionTabsProps) => {
  const { tabNames = [], tabClick } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  function itemClickHandler(index: number, item: any) {
    setCurrentIndex(index);
    tabClick(index, item);
  }

  return (
    <TabsWrapper>
      <ScrollView>
        {tabNames.map((item, index) => {
          return (
            <div
              className={classNames("item", { active: currentIndex === index })}
              key={item}
              onClick={() => itemClickHandler(index, item)}
            >
              {item}
            </div>
          );
        })}
      </ScrollView>
    </TabsWrapper>
  );
});

export default SectionTabs;
