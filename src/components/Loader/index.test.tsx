import SkillContext from "@/contexts/skills";
import Loader from ".";
import { SkillResponse } from "@/models/SkillsResponse";
import { render } from "@testing-library/react";
let mock = jest.fn();

describe("Testing Loader Component", () => {
  it("should render the component with a loading spinner", () => {
    const { container } = render(
      <SkillContext.Provider
        value={{
          isLoading: true,
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
        <Loader />
      </SkillContext.Provider>
    );
    expect(container.firstChild?.firstChild).toHaveClass("spinner");
  });
});
