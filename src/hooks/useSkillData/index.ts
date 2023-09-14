import { useContext } from "react";
import SkillContext, { SkillContextData } from "../../contexts/skills";

const useSkillData = (): SkillContextData => {
  const context = useContext<SkillContextData>(SkillContext);

  return context;
};

export default useSkillData;
