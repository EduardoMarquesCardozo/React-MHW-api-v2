import styled from "styled-components";

export const Wrapper = styled.div`
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin: 16px 0;
`;

export const Page = styled.button`
  display: flex;
  cursor: pointer;
  color: var(--primary-color);
  align-items: center;
  justify-content: center;
  width: 33px;
  height: 33px;
  border-radius: 8px;
  border: 1px solid var(--border);
  background: var(--bg-opaque);
  &.selected {
    border: 1px solid var(--selected);
  }
`;
