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
  modifiers?: any;
  description: string;
  skillName: string;
}
