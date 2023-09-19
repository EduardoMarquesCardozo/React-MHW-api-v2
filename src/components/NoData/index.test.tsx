import { render } from "@testing-library/react";
import NoData from ".";

describe("Testing NoData Component", () => {
  it("should render the component with a message", () => {
    const { getByText } = render(<NoData message="Mensagem de teste" />);
    expect(getByText("Mensagem de teste")).toBeTruthy();
  });
});
