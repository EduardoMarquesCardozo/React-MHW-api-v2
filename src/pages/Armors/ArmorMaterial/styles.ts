import { styled } from "styled-components";

export const Wrapper = styled.div`
  flex-direction: column;
  width: 100%;
  border-radius: 16px;
  background-color: var(--bg-opaque);
  border: 1px solid var(--border);
  align-items: center;
  padding: 24px 0;
  img {
    width: 160px;
    margin-bottom: 24px;
  }
`;

export const Materials = styled.div`
  width: 100%;
  flex-direction: column;
`;

export const Title = styled.div`
  div {
    h5 {
      width: 100%;
    }
    flex: 2;
    &:last-child {
      flex: 1;
      text-align: center;
    }
  }
`;

export const MaterialsList = styled.div`
  flex-direction: column;
  section {
    display: flex;
    position: relative;
    &:not(:last-child)::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 90%;
      height: 0;
      border-bottom: 1px solid var(--border);
    }

    div {
      padding: 16px 16px;
      flex: 2;
    }
    p {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0;
    }
  }
`;
