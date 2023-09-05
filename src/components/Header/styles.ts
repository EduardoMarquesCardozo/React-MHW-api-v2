import { styled } from "styled-components";

export const Wrapper = styled.header`
  display: flex;
  position: sticky;
  align-items: center;
  top: 0;
  padding: 8px 16px;
  background-color: var(--bg-opaque);
  border-bottom: 1px solid var(--border);

  img {
    width: 108px;
    height: 50px;
  }
  h1 {
    display: flex;
    align-items: center;
    border-left: 1px solid var(--border);
    padding-left: 16px;
    margin-left: 16px;
  }
`;
