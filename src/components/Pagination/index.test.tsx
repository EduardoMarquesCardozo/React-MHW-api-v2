import { fireEvent, waitFor } from "@testing-library/react";
import Pagination from ".";
import { paginationRender } from "../../test/paginationRender";

describe("Testing Pagination Component", () => {
  it("should render the component with all page options", () => {
    const { getByText, getByAltText } = paginationRender(<Pagination />);

    expect(getByAltText("Go back a page")).toBeInTheDocument();
    waitFor(() => {
      expect(getByText("1")).toBeInTheDocument();
      expect(getByText("1")).toHaveClass("selected");
      expect(getByText("2")).toBeInTheDocument();
      expect(getByText("3")).toBeInTheDocument();
    });
    expect(getByAltText("Go forward a page")).toBeInTheDocument();
  });
  it("should be able to go forward and backwards in pages", () => {
    const { getByText, getByAltText } = paginationRender(<Pagination />);
    const botaoAvancar = getByAltText("Go forward a page");
    const botaoVoltar = getByAltText("Go back a page");

    fireEvent.click(botaoAvancar);
    waitFor(() => {
      expect(getByText("2")).toHaveClass("selected");
    });
    fireEvent.click(botaoVoltar);
    waitFor(() => {
      expect(getByText("1")).toHaveClass("selected");
    });
  });
  it("should be able to select the page you want to go", () => {
    const { getByText } = paginationRender(<Pagination />);
    const pagina = getByText("3");

    fireEvent.click(pagina);
    waitFor(() => {
      expect(getByText("2")).toBeInTheDocument();
      expect(getByText("3")).toBeInTheDocument();
      expect(getByText("3")).toHaveClass("selected");
      expect(getByText("4")).toBeInTheDocument();
    });
  });
});
