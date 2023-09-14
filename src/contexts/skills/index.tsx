import React, { createContext, useCallback, useState } from "react";
import { SkillService } from "../../services/Skill";
import { SkillResponse } from "../../models/SkillsResponse";

interface SkillProviderProps {
  children: React.ReactNode;
}

export interface SkillContextData {
  setIsLoading: (loading: boolean) => void;
  isLoading: boolean;
  skillList: SkillResponse[];
  setSkillList: (clear: SkillResponse[]) => void;
  getSkill: (id: number) => void;
}

const SkillContext = createContext({} as SkillContextData);

export const SkillProvider = ({ children }: SkillProviderProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [skillList, setSkillList] = useState<SkillResponse[]>([]);

  const getSkill = useCallback(async (id: number) => {
    setIsLoading(true);
    await new SkillService()
      .getSkill(id)
      .then((skill: SkillResponse) => {
        setSkillList((skillList) => [...skillList, skill]);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <SkillContext.Provider
      value={{
        getSkill,
        setSkillList,
        skillList,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </SkillContext.Provider>
  );
};

export default SkillContext;
