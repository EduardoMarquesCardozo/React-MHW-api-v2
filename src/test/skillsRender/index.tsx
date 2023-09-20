import { render, RenderOptions } from "@testing-library/react";
import * as React from "react";
import SkillContext from "@/contexts/skills";
import { SkillResponse } from "@/models/SkillsResponse";
import { skillListMockData } from "./data";
import ArmorSetContext from "@/contexts/armorSet";
import {
  armorSetDataMock,
  armorSetDataMockOther,
  armorSetListDataMock,
} from "../armorSetRender/data";
import { ArmorPiece } from "@/models/ArmorPiece";
import { Bonus } from "@/models/Bonus";

interface SkillsProvidersProps {
  children?: React.ReactNode;
}
let mock = jest.fn();
const SkillsProviders = ({ children }: SkillsProvidersProps) => {
  return (
    <SkillContext.Provider
      value={{
        isLoading: false,
        skillList: skillListMockData,
        getSkill: (id: number) => {
          mock(id);
        },
        setIsLoading: (loading: boolean) => {
          mock(loading);
        },
        setSkillList: (clear: SkillResponse[]) => {
          mock(clear);
        },
      }}
    >
      <ArmorSetContext.Provider
        value={{
          armorSetPage: armorSetListDataMock,
          selectedArmor: armorSetDataMockOther.pieces[0],
          selectedBonus: armorSetDataMockOther.bonus,
          allArmorSets: armorSetListDataMock,
          List: (rank?: string) => mock(rank),
          ListPaginated: (pageToGo: number) => {
            mock(pageToGo);
          },
          ChangeArmorPiece: (armor: ArmorPiece, bonus: Bonus) => {
            mock(armor, bonus);
          },
        }}
      >
        {children}
      </ArmorSetContext.Provider>
    </SkillContext.Provider>
  );
};

const skillsRender = (ui: React.ReactElement | any, options?: RenderOptions) =>
  render(ui, { wrapper: SkillsProviders, ...options });

export { skillsRender };
