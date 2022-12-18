import ScrollView from "@/base-ui/scroll-view";
import RoomItem from "@/components/room-item";
import SectionFooter from "@/components/section-footer";
import SectionHeader from "@/components/section-header";
import React, { memo } from "react";
import { SectionV3Wrapper } from "./style";
import { IRes } from "@/types/request";
import { IRoom } from "../../../../types/shared";

interface IHomeSectionV3 {
  infoData: IRes<IRoom>;
}

const HomeSectionV3 = memo((props: IHomeSectionV3) => {
  const { infoData } = props;
  return (
    <SectionV3Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <div className="room-list">
        <ScrollView>
          {infoData.list?.map((item) => {
            return <RoomItem itemData={item} itemWidth="20%" key={item.id} />;
          })}
        </ScrollView>
      </div>
      <SectionFooter name="plus" />
    </SectionV3Wrapper>
  );
});

export default HomeSectionV3;
