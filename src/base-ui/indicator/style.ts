import styled from "styled-components";

export const IndicatorWrapper = styled.div.attrs(() => {
  const otherStyle = `.i-content: {
    display: flex;
    position: relative;
    transition: transform 200ms ease;
    > * {
      flex-shrink: 0;
    }
  }`;
  return { otherStyle };
})`
  overflow: hidden;
  ${(props) => props.otherStyle}
`;
