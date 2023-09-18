import ReactDOM from "react-dom/client";
import { GlobalStyle, Wrapper } from "./styles/index.ts";
import Armors from "./pages/Armors/index.tsx";
import Header from "./components/Header/index.tsx";
import { ArmorSetProvider } from "./contexts/armorSet/index.tsx";
import Loader from "./components/Loader/index.tsx";
import { PaginationProvider } from "./contexts/pagination/index.tsx";
import { SkillProvider } from "./contexts/skills/index.tsx";
// https://monsterhunter.fandom.com/wiki/User:YukiHerz/SVG_Icons
// https://docs.mhw-db.com/?shell#introduction
// https://vitejs.dev/guide/
// https://styled-components.com/docs/basics#installation
// https://axios-http.com/ptbr/docs/intro
// https://monsterhunter.fandom.com/wiki/Status_Effects
// https://feathericons.com/

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
