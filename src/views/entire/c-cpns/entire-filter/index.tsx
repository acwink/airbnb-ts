import React, { memo, useState } from "react";
import { FilterWrapper } from "./style";
import filterData from "@/assets/data/filter_data.json";
import classNames from "classnames";

const EntireFilter = memo(() => {
  const [selectItems, setSelectItems] = useState<any[]>([]);

  function itemClickHandle(item: any) {
    const newItems = [...selectItems];

    if (newItems.includes(item)) {
      const idx = newItems.indexOf(item);
      newItems.splice(idx, 1);
    } else {
      newItems.push(item);
    }
    setSelectItems(newItems);
  }
  return (
    <FilterWrapper>
      <div className="filter">
        {filterData.map((item) => {
          return (
            <div
              className={classNames("item", {
                active: selectItems.includes(item),
              })}
              key={item}
              onClick={() => itemClickHandle(item)}
            >
              {item}
            </div>
          );
        })}
      </div>
    </FilterWrapper>
  );
});

export default EntireFilter;
