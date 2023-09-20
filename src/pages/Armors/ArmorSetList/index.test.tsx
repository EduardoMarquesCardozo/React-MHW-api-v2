import { fireEvent, waitFor } from "@testing-library/react";
import ArmorSetList from ".";
import { armorSetRender } from "@/test/armorSetRender";

describe("Testing ArmorSetList Component", () => {
  it("should render the component with the Tabs and content div", () => {
    const { container, debug } = armorSetRender(<ArmorSetList />);
    debug();
    expect(container.firstChild?.childNodes.length).toBe(2);
  });
  describe("Testing Tabs", () => {
    it("should render with three Tabs", () => {
      const { getByText } = armorSetRender(<ArmorSetList />);
      expect(getByText("Low Rank")).toBeInTheDocument();
      expect(getByText("Low Rank")).toHaveClass("low-rank");
      expect(getByText("High Rank")).toBeInTheDocument();
      expect(getByText("Master Rank")).toBeInTheDocument();
    });
    it("should be able to change tabs", () => {
      const { getByText } = armorSetRender(<ArmorSetList />);
      fireEvent.click(getByText("High Rank"));
      waitFor(() => {
        expect(getByText("High Rank")).toHaveClass("high-rank");
      });
      fireEvent.click(getByText("Master Rank"));
      waitFor(() => {
        expect(getByText("Master Rank")).toHaveClass("master-rank");
      });
    });
  });
  describe("Testing Content", () => {
    it("should render with two rows titled Zorah Alpha and Zorah Beta", () => {
      const { getByTestId, getByText } = armorSetRender(<ArmorSetList />);
      const table = getByTestId("table");
      expect(table.childNodes.length).toBe(2);
      expect(getByText("Zorah Alpha")).toBeInTheDocument();
      expect(getByText("Zorah Beta")).toBeInTheDocument();
    });
    it("should render with five pieces of armor each", () => {
      const { getAllByAltText } = armorSetRender(<ArmorSetList />);
      expect(getAllByAltText("head").length).toBe(2);
      expect(getAllByAltText("chest").length).toBe(2);
      expect(getAllByAltText("gloves").length).toBe(2);
      expect(getAllByAltText("waist").length).toBe(2);
      expect(getAllByAltText("legs").length).toBe(2);
    });
  });
});
