import { render, RenderOptions } from "@testing-library/react";
import * as React from "react";
import PaginationContext from "../../contexts/pagination";

interface AllProvidersProps {
  children?: React.ReactNode;
}
let mockPages = jest.fn();
const AllProviders = ({ children }: AllProvidersProps) => {
  return (
    <PaginationContext.Provider
      value={{
        pagesArray: [1, 2, 3],
        currentPage: 1,
        maxPage: 8,
        selectPage: (page: number) => {
          mockPages(page);
        },
        backAPage: jest.fn(),
        forwardAPage: jest.fn(),
      }}
    >
      {children}
    </PaginationContext.Provider>
  );
};

const paginationRender = (
  ui: React.ReactElement | any,
  options?: RenderOptions
) => render(ui, { wrapper: AllProviders, ...options });

export { paginationRender };
