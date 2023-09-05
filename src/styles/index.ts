import { createGlobalStyle, styled } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        font-family: 'Noto Sans', sans-serif;
        line-height: 1.5;
        color: var(--primary-color);
        --primary-color: #c3c3c3;
        --primary-highlight: #5ebbd1;
        --secondary-highlight: #b59a27;
        --border: #4C4948;
        --bg-opaque: rgba(26, 22, 21, 0.50);
    }

    body{
        margin: 0;
        width: 100vw;
        height: 100vh;
    }

    h1{
        margin: 0;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: 120%;
    }
    #root{
    }

`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
