import { render } from "@testing-library/react";
import Header from ".";

describe("Testing header", () => {
  it("should render header", () => {
    const { getByText, getByAltText } = render(<Header />);
    expect(getByText("MH Research Center")).toBeTruthy();
    expect(getByAltText("Monster hunter world logo")).toBeTruthy();
  });
});
