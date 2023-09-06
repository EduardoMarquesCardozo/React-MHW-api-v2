import ReactDOM from "react-dom/client";
import { GlobalStyle, Wrapper } from "./styles/index.ts";
import Header from "./components/Header/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Wrapper>
    <GlobalStyle />
    <Header />
  </Wrapper>
);
