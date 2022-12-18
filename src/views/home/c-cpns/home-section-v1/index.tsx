import SectionRooms from "@/components/section-rooms";
import SectionHeader from "@/components/section-header";
import { SectionV1Wrapper } from "./style";
import React, { memo } from "react";
import SectionFooter from "@/components/section-footer";
import { IRoom } from "../../../../types/shared";
import { IRes } from "@/types/request";

interface IHomeSectionV1Props {
  infoData: IRes<IRoom>;
}

const HomeSectionV1 = memo((props: IHomeSectionV1Props) => {
  const { infoData } = props;
  return (
    <SectionV1Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <SectionRooms roomList={infoData.list} />
      <SectionFooter />
    </SectionV1Wrapper>
  );
});

export default HomeSectionV1;
