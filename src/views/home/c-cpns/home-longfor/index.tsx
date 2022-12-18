import SetcionHeader from "@/components/section-header";
import { LongforWrapper } from "./style";
import React, { memo } from "react";
import LongforItem from "@/components/longfor-item";
import ScrollView from "@/base-ui/scroll-view";
import { ILongforItem } from "@/types/home";
import { IRes } from "@/types/request";

interface IHomeLongforProps {
  infoData: IRes<ILongforItem>;
}

const HomeLongfor = memo((props: IHomeLongforProps) => {
  const { infoData } = props;

  return (
    <LongforWrapper>
      <SetcionHeader title={infoData.title} subtitle={infoData.subtitle} />

      <div className="longfor-list">
        <ScrollView>
          {infoData.list?.map((item) => {
            return <LongforItem itemData={item} key={item.city} />;
          })}
        </ScrollView>
      </div>
    </LongforWrapper>
  );
});

export default HomeLongfor;
