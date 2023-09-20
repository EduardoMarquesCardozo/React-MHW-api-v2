import { Resistances } from "src/models/Resistance";
import {
  Dragon,
  Fire,
  Ice,
  Thunder,
  Water,
} from "../../../../assets/defense_icons";
import { SkillResponse } from "src/models/SkillsResponse";
import { EmptyCheck, FilledCheck, SContent } from "../styles";

export const ailmentType = (ailment: string) => {
  return (
    <img
      src={
        ailment == "Vs Fire"
          ? Fire
          : ailment == "Vs Water"
          ? Water
          : ailment == "Vs Thunder"
          ? Thunder
          : ailment == "Vs Ice"
          ? Ice
          : Dragon
      }
      alt={ailment}
    />
  );
};

export const ailmentValue = (ailment: string, resistances?: Resistances) => {
  return (
    <>
      {ailment == "Vs Fire"
        ? resistances?.fire
        : ailment == "Vs Water"
        ? resistances?.water
        : ailment == "Vs Thunder"
        ? resistances?.thunder
        : ailment == "Vs Ice"
        ? resistances?.ice
        : resistances?.dragon}
    </>
  );
};

export const skillChecks = (
  skillData: SkillResponse | undefined,
  level: number
) => {
  if (skillData) {
    return (
      <SContent data-testid="skills-value">
        {skillData.ranks.map((rank) => (
          <span key={rank.id}>
            {rank.level <= level ? <FilledCheck /> : <EmptyCheck />}
          </span>
        ))}
      </SContent>
    );
  }
};
