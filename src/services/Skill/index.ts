import { SkillResponse } from "src/models/SkillsResponse";
import { APIResponse } from "../../models/APIresponse";
import mhwApi from "../../utils/api";
import { AxiosResponse } from "axios";

export class SkillService {
  constructor(private readonly path = "skills/") {}

  async getSkill(id: number): Promise<SkillResponse> {
    const url = this.path + `${id}`;
    const skill: AxiosResponse<APIResponse<SkillResponse>> = await mhwApi.get(
      url
    );

    return skill.data as unknown as SkillResponse;
  }
}
