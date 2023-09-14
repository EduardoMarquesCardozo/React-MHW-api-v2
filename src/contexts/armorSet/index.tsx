import React, { createContext, useCallback, useState } from "react";
import { ArmorPiece } from "../../models/ArmorPiece";
import { ArmorSet } from "../../models/ArmorSet";
import { Bonus } from "../../models/Bonus";
import { ArmorSetService } from "../../services/ArmorSet";
import { pageSize } from "../../utils/constants";

interface ArmorSetProviderProps {
  children: React.ReactNode;
}

export interface ArmorSetContextData {
  armorSetPage: ArmorSet[];
  selectedArmor?: ArmorPiece;
  selectedBonus?: Bonus;
  allArmorSets: ArmorSet[];
  isLoading: boolean;
  List: (rank?: string) => Promise<void>;
  ListPaginated: (pageToGo: number) => void;
  ChangeArmorPiece: (armor: ArmorPiece, bonus: Bonus) => void;
}

const ArmorSetContext = createContext({} as ArmorSetContextData);

export const ArmorSetProvider = ({ children }: ArmorSetProviderProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [armorSetPage, setArmorSetPage] = useState<ArmorSet[]>([]);

  const [allArmorSets, setAllArmorSets] = useState<ArmorSet[]>([]);

  const [selectedArmor, setSelectedArmor] = useState<ArmorPiece>();
  const [selectedBonus, setSelectedBonus] = useState<Bonus>();

  const List = useCallback(async (rank: string = "low") => {
    setIsLoading(true);
    await new ArmorSetService()
      .listArmorSets(rank)
      .then((listArmor: ArmorSet[]) => {
        setAllArmorSets(listArmor);
        setArmorSetPage(listArmor.slice(0, pageSize));
        ChangeArmorPiece(listArmor[0].pieces[0], listArmor[0].bonus);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const ListPaginated = (pageToGo: number) => {
    setArmorSetPage(
      allArmorSets.slice(pageToGo * pageSize - pageSize, pageToGo * pageSize)
    );
  };

  const ChangeArmorPiece = (armor: ArmorPiece, bonus: Bonus) => {
    setSelectedArmor(armor);
    setSelectedBonus(bonus);
  };

  return (
    <ArmorSetContext.Provider
      value={{
        List,
        ListPaginated,
        ChangeArmorPiece,
        armorSetPage,
        allArmorSets,
        selectedArmor,
        selectedBonus,
        isLoading,
      }}
    >
      {children}
    </ArmorSetContext.Provider>
  );
};

export default ArmorSetContext;
