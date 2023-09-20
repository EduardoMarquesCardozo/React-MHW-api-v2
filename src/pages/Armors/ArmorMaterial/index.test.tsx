import { skillsRender } from "@/test/skillsRender";
import ArmorMaterial from ".";

describe("Testing ArmorMaterial Component", () => {
  it("should render the materials name needed", () => {
    const { getByText } = skillsRender(<ArmorMaterial />);
    expect(getByText("Zorah Magdaros Heat Scale")).toBeInTheDocument();
    expect(getByText("Zorah Magdaros Ridge")).toBeInTheDocument();
    expect(getByText("Zorah Magdaros Carapace")).toBeInTheDocument();
    expect(getByText("Dragonite Ore")).toBeInTheDocument();
  });
  it("should render the materials value needed", () => {
    const { getByText } = skillsRender(<ArmorMaterial />);
    expect(getByText("3")).toBeInTheDocument();
    expect(getByText("2")).toBeInTheDocument();
    expect(getByText("6")).toBeInTheDocument();
    expect(getByText("8")).toBeInTheDocument();
  });
});
