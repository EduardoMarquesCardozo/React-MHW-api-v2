import { ArmorSet } from "../../models/ArmorSet";
import { APIResponse } from "../../models/APIresponse";
import mhwApi from "../../utils/api";
import { AxiosResponse } from "axios";

export class ArmorSetService {
  constructor(private readonly path = "armor/") {}

  async listArmorSets(rank: string): Promise<ArmorSet[]> {
    const url = this.path + `sets?q={"rank":"${rank}"}`;
    const allArmorSets: AxiosResponse<APIResponse<ArmorSet[]>> =
      await mhwApi.get(url);

    return allArmorSets.data as unknown as ArmorSet[];
  }
}
