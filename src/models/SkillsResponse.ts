export interface SkillResponse {
  id: number;
  name: string;
  description: string;
  ranks: Rank[];
}

export interface Rank {
  id: number;
  skill: number;
  level: number;
  modifiers: Modifiers;
  description: string;
  skillName: string;
}

export interface Modifiers {
  damageFire: any;
}
