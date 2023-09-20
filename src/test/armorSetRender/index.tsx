import ArmorSetContext from "@/contexts/armorSet";
import { render, RenderOptions } from "@testing-library/react";
import * as React from "react";
import { armorSetDataMock, armorSetListDataMock } from "./data";
import { Bonus } from "@/models/Bonus";
import { ArmorPiece } from "@/models/ArmorPiece";

interface ArmorSetsProvidersProps {
  children?: React.ReactNode;
}
let mock = jest.fn();
const ArmorSetsProviders = ({ children }: ArmorSetsProvidersProps) => {
  return (
    <ArmorSetContext.Provider
      value={{
        armorSetPage: armorSetListDataMock,
        selectedArmor: armorSetDataMock.pieces[0],
        selectedBonus: armorSetDataMock.bonus,
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
  );
};

const armorSetRender = (
  ui: React.ReactElement | any,
  options?: RenderOptions
) => render(ui, { wrapper: ArmorSetsProviders, ...options });

export { armorSetRender };
