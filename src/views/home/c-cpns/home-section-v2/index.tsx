import React, { memo, useState, useCallback, useDeferredValue } from "react";

import { SectionV2Wrapper } from "./style";
import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";
import SectionTabs from "@/components/section-tabs";
import SectionFooter from "@/components/section-footer";
import { IResForDest } from "@/types/request";
import { IDestAddress } from "@/types/home";
import { IRoom } from "../../../../types/shared";

interface IHomeSectionV2Props {
  infoData: IResForDest<IDestAddress, IRoom>;
}
const HomeSectionV2 = memo((props: IHomeSectionV2Props) => {
  /** 从props获取数据 */
  const { infoData } = props;

  /** 定义内部数据 */
  const initialName = Object.keys(infoData.dest_list ?? {})[0] ?? "";
  const [name, setName] = useState(initialName);
  const tabNames = infoData.dest_address?.map((item) => item.name);
  const list = useDeferredValue(infoData.dest_list?.[name]);

  // 事件处理函数
  const tabClickHandle = useCallback(function (index: number, name: string) {
    setName(name);
  }, []);

  return (
    <SectionV2Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <SectionTabs tabNames={tabNames} tabClick={tabClickHandle} />
      <SectionRooms roomList={list} itemWidth="33.33%" />
      <SectionFooter name={name} />
    </SectionV2Wrapper>
  );
});

export default HomeSectionV2;
