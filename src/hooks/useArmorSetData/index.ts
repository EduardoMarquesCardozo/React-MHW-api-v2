import { useContext } from "react";
import ArmorSetContext, { ArmorSetContextData } from "../../contexts/armorSet";

const useArmorSetData = (): ArmorSetContextData => {
  const context = useContext<ArmorSetContextData>(ArmorSetContext);

  return context;
};

export default useArmorSetData;
