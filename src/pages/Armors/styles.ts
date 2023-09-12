import { styled } from "styled-components";

export const HighlightTitle = styled.h5`
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  padding: 6px 16px;
  background: linear-gradient(
    270deg,
    rgb(0, 0, 0, 0) 0%,
    rgb(172, 172, 172, 50%) 50%,
    rgba(0, 0, 0, 0) 100%
  );
`;
export const Wrapper = styled.div`
  height: 100%;
  align-items: center;
  padding: 0 16px;
  gap: 16px;
  .leftTitle {
    background: linear-gradient(90deg, #4c4d47 0%, rgba(76, 77, 71, 0) 100%);
  }
`;

export const LBox = styled.div`
  flex: 4;
`;

export const MBox = styled.div`
  flex: 5;
`;

export const RBox = styled.div`
  flex: 3;
`;
