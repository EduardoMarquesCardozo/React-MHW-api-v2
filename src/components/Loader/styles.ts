import { styled } from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
  .spinner {
    border: 5px solid rgba(0, 0, 0, 0.3);
    border-top: 5px solid #000;
    border-radius: 50%;
    width: 64px;
    height: 64px;
    animation: spin 3s linear infinite;
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
