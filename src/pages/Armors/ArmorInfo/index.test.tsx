import { skillsRender } from "@/test/skillsRender";
import ArmorInfo from ".";

describe("Testing ArmorInfo Component", () => {
  it("should render the armorPiece name", () => {
    const { getByText } = skillsRender(<ArmorInfo />);
    expect(getByText("Zorah Headgear Beta")).toBeInTheDocument();
  });
  describe("Testing ArmorInfo Info", () => {
    it("should render the defense info of the armorPiece", () => {
      const { getByText } = skillsRender(<ArmorInfo />);
      expect(getByText("Defense")).toBeInTheDocument();
      expect(getByText("Vs Fire")).toBeInTheDocument();
      expect(getByText("Vs Water")).toBeInTheDocument();
      expect(getByText("Vs Thunder")).toBeInTheDocument();
      expect(getByText("Vs Ice")).toBeInTheDocument();
      expect(getByText("Vs Dragon")).toBeInTheDocument();
    });
    it("should render each value", () => {
      const { getByText, getAllByText } = skillsRender(<ArmorInfo />);
      expect(getByText("4")).toBeInTheDocument();
      expect(getAllByText("-3").length).toBe(2);
      expect(getByText("-1")).toBeInTheDocument();
      expect(getByText("-2")).toBeInTheDocument();
    });
  });
  describe("Testing ArmorInfo Decoration", () => {
    it("should render the number of decoration slots", () => {
      const { getByText, getByAltText } = skillsRender(<ArmorInfo />);
      expect(getByAltText("Decoration size")).toBeInTheDocument();
      expect(getByText("Small decoration")).toBeInTheDocument();
    });
  });
  describe("Testing ArmorInfo Skills", () => {
    it("should render the number of skills", () => {
      const { getByText, getByTestId } = skillsRender(<ArmorInfo />);
      expect(getByText("Handicraft")).toBeInTheDocument();
      expect(getByText("Level 1")).toBeInTheDocument();
      expect(getByTestId("skills-value").children.length).toBe(5);
    });
  });
  describe("Testing ArmorInfo Bonus Skills", () => {
    it("should render the title and value", () => {
      const { getByText } = skillsRender(<ArmorInfo />);
      expect(getByText("Zorah Magdaros Mastery")).toBeInTheDocument();
      expect(getByText("Critical Status")).toBeInTheDocument();
      expect(getByText("3")).toBeInTheDocument();
    });
  });
});
