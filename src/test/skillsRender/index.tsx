import { render, RenderOptions } from "@testing-library/react";
import * as React from "react";
import SkillContext from "@/contexts/skills";
import { SkillResponse } from "@/models/SkillsResponse";

interface SkillsProvidersProps {
  children?: React.ReactNode;
}
let mock = jest.fn();
const SkillsProviders = ({ children }: SkillsProvidersProps) => {
  return (
    <SkillContext.Provider
      value={{
        isLoading: false,
        skillList: [],
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
      {children}
    </SkillContext.Provider>
  );
};

const skillsRender = (ui: React.ReactElement | any, options?: RenderOptions) =>
  render(ui, { wrapper: SkillsProviders, ...options });

export { skillsRender };
