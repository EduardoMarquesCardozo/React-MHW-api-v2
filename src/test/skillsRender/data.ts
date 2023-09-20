import { SkillResponse } from "@/models/SkillsResponse";

export const skillBlastMockData: SkillResponse = {
  id: 34,
  name: "Blast Attack",
  description:
    "Increases the rate of the blast buildup. (Elemental buildup has a maximum limit.)",
  ranks: [
    {
      id: 114,
      skill: 34,
      level: 1,
      description: "Blast buildup +5% Bonus: +10",
      skillName: "Blast Attack",
    },
    {
      id: 115,
      skill: 34,
      level: 2,
      description: "Blast buildup +10% Bonus: +10",
      skillName: "Blast Attack",
    },
    {
      id: 116,
      skill: 34,
      level: 3,
      description: "Blast buildup +20% Bonus: +10",
      skillName: "Blast Attack",
    },
    {
      id: 371,
      skill: 34,
      level: 4,
      description: "Blast buildup +30% Bonus: +10",
      skillName: "Blast Attack",
    },
  ],
};

export const handicraftMockData: SkillResponse = {
  id: 44,
  name: "Handicraft",
  description:
    "Extends the weapon sharpness gauage. However, it will not increase the gauge past its maximum.",
  ranks: [
    {
      id: 142,
      skill: 44,
      level: 1,
      description: "Weapon sharpness +10",
      skillName: "Handicraft",
    },
    {
      id: 143,
      skill: 44,
      level: 2,
      description: "Weapon sharpness +20",
      skillName: "Handicraft",
    },
    {
      id: 144,
      skill: 44,
      level: 3,
      description: "Weapon sharpness +30",
      skillName: "Handicraft",
    },
    {
      id: 145,
      skill: 44,
      level: 4,
      description: "Weapon sharpness +40",
      skillName: "Handicraft",
    },
    {
      id: 146,
      skill: 44,
      level: 5,
      description: "Weapon sharpness +50",
      skillName: "Handicraft",
    },
  ],
};

export const skillListMockData: SkillResponse[] = [
  skillBlastMockData,
  handicraftMockData,
];
