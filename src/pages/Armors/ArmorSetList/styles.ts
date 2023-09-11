import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Tab = styled.div`
  display: flex;
  padding: 12px 0;
  justify-content: center;
  width: 115px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 16px 16px 0px 0px;
  background-color: var(--bg-opaque);
  border: 1px solid var(--border);
  &.low-rank {
    color: rgb(45 97 185);
    border: 3px solid rgba(45, 97, 185, 0.7);
  }
  &.high-rank {
    color: rgb(171 52 52);
    border: 3px solid rgba(171, 52, 52, 0.7);
  }
  &.master-rank {
    color: rgb(157 131 37);
    border: 3px solid rgba(157, 131, 37, 0.7);
  }
`;
export const SetsGroup = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0px 16px 16px 16px;
  width: 100%;
  height: 100%;
  background-color: var(--bg-opaque);
  border: 1px solid var(--border);
`;
export const Title = styled.div`
  display: flex;
  text-align: center;
  width: 100%;
  margin-top: 16px;
  p {
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    flex: 2;
    margin: 0;
    padding: 6px 16px;

    background: linear-gradient(
      270deg,
      rgb(0, 0, 0, 0) 0%,
      rgb(172, 172, 172, 15%) 50%,
      rgba(0, 0, 0, 0) 100%
    );

    &:first-child {
      flex: 1;
      text-align: initial;
    }
  }
`;
export const Table = styled.div`
  display: flex;
  margin: 16px 16px 0px 16px;
  padding-bottom: 16px;
  flex-direction: column;
  border-bottom: 1px solid var(--border);
  gap: 24px;
  div {
    display: flex;
  }
`;
export const Name = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  span {
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
  }
`;
export const Parts = styled.div`
  display: flex;
  flex: 2;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 33px;
    height: 33px;
    flex-shrink: 0;
    border-radius: 8px;
    border: 1px solid var(--border);
    background: var(--bg-opaque);
    img {
      width: 24px;
      height: 24px;
    }
  }
`;
export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin: 16px 0;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 33px;
    height: 33px;
    flex-shrink: 0;
    border-radius: 8px;
    border: 1px solid var(--border);
    background: var(--bg-opaque);
  }
`;