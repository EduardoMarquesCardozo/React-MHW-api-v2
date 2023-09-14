import ReactDOM from "react-dom/client";
import { GlobalStyle, Wrapper } from "./styles/index.ts";
import Armors from "./pages/Armors/index.tsx";
import Header from "./components/Header/index.tsx";
import { ArmorSetProvider } from "./contexts/armorSet/index.tsx";
import Loader from "./components/Loader/index.tsx";
import { PaginationProvider } from "./contexts/pagination/index.tsx";
import { SkillProvider } from "./contexts/skills/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Wrapper>
    <GlobalStyle />
    <Header />
    <SkillProvider>
      <ArmorSetProvider>
        <PaginationProvider>
          <Loader />
          <Armors />
        </PaginationProvider>
      </ArmorSetProvider>
    </SkillProvider>
  </Wrapper>
);
