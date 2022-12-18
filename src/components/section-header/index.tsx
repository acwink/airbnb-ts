import React, { memo } from "react";
import { HeaderWrapper } from "./style";

interface ISectionHeaderProps {
  title: string;
  subtitle?: string;
}

const SetcionHeader = memo((props: ISectionHeaderProps) => {
  const { title, subtitle } = props;

  return (
    <HeaderWrapper>
      <h2 className="title">{title}</h2>
      {subtitle && <div className="subtitle">{subtitle}</div>}
    </HeaderWrapper>
  );
});

export default SetcionHeader;
