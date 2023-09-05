import ReactDOM from "react-dom/client";
import { GlobalStyle, Wrapper } from "./styles/index.ts";
import Armors from "./pages/Armors/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Wrapper>
    <GlobalStyle />
    <Armors />
  </Wrapper>
);
